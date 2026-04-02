import { ApifyClient } from 'apify-client';
import * as fs from 'fs';
import * as path from 'path';

export function getApifyClient(): ApifyClient {
  const apiKey = process.env.APIFY_API_KEY;
  if (!apiKey) {
    throw new Error('APIFY_API_KEY environment variable is not set');
  }
  return new ApifyClient({ token: apiKey });
}

interface CompetitorData {
  url: string;
  title: string;
  text: string;
  links: string[];
}

interface ContentItem {
  title: string;
  url: string;
  snippet: string;
  source: string;
}

interface PricingData {
  provider: string;
  product: string;
  priceRange: string;
  features: string[];
}

export async function scrapeCompetitors(): Promise<CompetitorData[]> {
  try {
    const client = getApifyClient();
    const urls = [
      'https://www.moneyhub.co.nz/house-insurance.html',
      'https://www.state.co.nz/house-insurance',
      'https://www.tower.co.nz/house-insurance/',
      'https://initio.co.nz/compare-house-insurance-policies/',
    ];

    const input = {
      startUrls: urls.map((url) => ({ url })),
      maxCrawlDepth: 1,
      maxPagesPerCrawl: 10,
    };

    const run = await client.actor('apify/website-content-crawler').call(input);

    const dataset = await client
      .dataset(run.defaultDatasetId)
      .listItems({ limit: 100 });

    return dataset.items.map((item: any) => ({
      url: item.url || '',
      title: item.title || '',
      text: item.text || '',
      links: item.links || [],
    }));
  } catch (error) {
    console.error('Error scraping competitors:', error);
    return [];
  }
}

export async function scrapeContentFeed(): Promise<ContentItem[]> {
  try {
    const client = getApifyClient();
    const input = {
      queries: ['buildings insurance New Zealand news 2026'],
      maxPages: 1,
      resultsPerPage: 10,
    };

    const run = await client.actor('apify/google-search-scraper').call(input);

    const dataset = await client
      .dataset(run.defaultDatasetId)
      .listItems({ limit: 50 });

    return dataset.items.map((item: any) => ({
      title: item.title || '',
      url: item.url || '',
      snippet: item.snippet || '',
      source: item.source || 'Search Result',
    }));
  } catch (error) {
    console.error('Error scraping content feed:', error);
    return [];
  }
}

export async function scrapePricingData(): Promise<PricingData[]> {
  try {
    const client = getApifyClient();
    const urls = [
      'https://www.moneyhub.co.nz/house-insurance.html',
      'https://www.state.co.nz/house-insurance',
      'https://www.tower.co.nz/house-insurance/',
    ];

    const input = {
      startUrls: urls.map((url) => ({ url })),
      maxCrawlDepth: 1,
      maxPagesPerCrawl: 5,
    };

    const run = await client.actor('apify/website-content-crawler').call(input);

    const dataset = await client
      .dataset(run.defaultDatasetId)
      .listItems({ limit: 50 });

    return dataset.items
      .filter((item: any) => item.price || item.priceRange)
      .map((item: any) => ({
        provider: item.provider || item.company || '',
        product: item.product || '',
        priceRange: item.priceRange || item.price || '',
        features: item.features || [],
      }));
  } catch (error) {
    console.error('Error scraping pricing data:', error);
    return [];
  }
}

export async function refreshAllData(): Promise<void> {
  try {
    const [competitors, content, pricing] = await Promise.all([
      scrapeCompetitors(),
      scrapeContentFeed(),
      scrapePricingData(),
    ]);

    const dataDir = path.join(process.cwd(), 'src', 'data');

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(
      path.join(dataDir, 'apify-competitors.json'),
      JSON.stringify(competitors, null, 2)
    );

    fs.writeFileSync(
      path.join(dataDir, 'apify-content.json'),
      JSON.stringify(content, null, 2)
    );

    fs.writeFileSync(
      path.join(dataDir, 'apify-pricing.json'),
      JSON.stringify(pricing, null, 2)
    );

    console.log('Successfully refreshed all Apify data');
  } catch (error) {
    console.error('Error refreshing all data:', error);
  }
}

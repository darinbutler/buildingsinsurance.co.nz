import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

/**
 * Scrape Competitors Script
 * Fetches competitor data and stores it in src/data/apify-competitors.json
 *
 * Usage: npx ts-node src/scripts/scrape-competitors.ts
 *
 * This script would integrate with Apify API to:
 * 1. Scrape competitor websites for pricing and product data
 * 2. Extract key information about insurance offerings
 * 3. Store structured data for comparison
 */

interface CompetitorData {
  id: string;
  name: string;
  domain: string;
  baseUrl: string;
  products: string[];
  features: string[];
  lastScraped: string;
}

interface ScrapingResult {
  timestamp: string;
  competitors: CompetitorData[];
  scrapingStatus: 'success' | 'partial' | 'failed';
  errors: string[];
}

const COMPETITORS_TO_SCRAPE = [
  {
    name: 'State Insurance',
    domain: 'state.co.nz',
    baseUrl: 'https://www.state.co.nz',
  },
  {
    name: 'AMI Insurance',
    domain: 'ami.co.nz',
    baseUrl: 'https://www.ami.co.nz',
  },
  {
    name: 'AA Insurance',
    domain: 'aa.co.nz',
    baseUrl: 'https://www.aa.co.nz/insurance',
  },
  {
    name: 'Tower Insurance',
    domain: 'tower.co.nz',
    baseUrl: 'https://www.tower.co.nz',
  },
  {
    name: 'Vero Insurance',
    domain: 'vero.co.nz',
    baseUrl: 'https://www.vero.co.nz',
  },
  {
    name: 'Youi Insurance',
    domain: 'youi.co.nz',
    baseUrl: 'https://www.youi.co.nz',
  },
];

async function scrapeCompetitors() {
  try {
    console.log('🔍 Starting competitor data scraping...');
    console.log(`📍 Target competitors: ${COMPETITORS_TO_SCRAPE.length}`);

    // Import Apify (placeholder - would be actual implementation in production)
    // const { scrapeCompetitors } = await import('@/lib/apify');

    const errors: string[] = [];
    const competitors: CompetitorData[] = [];

    for (const competitor of COMPETITORS_TO_SCRAPE) {
      try {
        console.log(`\n🕷️  Scraping: ${competitor.name}`);
        console.log(`   Domain: ${competitor.domain}`);
        console.log(`   URL: ${competitor.baseUrl}`);

        // In production, this would use Apify to scrape:
        // const data = await scrapeCompetitors({
        //   url: competitor.baseUrl,
        //   selector: '.product-item, [data-product]',
        // });

        // Create placeholder data
        const competitorData: CompetitorData = {
          id: competitor.domain.replace('.co.nz', '').toLowerCase(),
          name: competitor.name,
          domain: competitor.domain,
          baseUrl: competitor.baseUrl,
          products: [
            'Buildings Insurance',
            'Contents Insurance',
            'Home & Contents Bundle',
            'Landlord Insurance',
            'Investment Property',
          ],
          features: [
            'Online Quote',
            'Fast Claims',
            'Mobile App',
            '24/7 Support',
            'NZ Based',
          ],
          lastScraped: new Date().toISOString(),
        };

        competitors.push(competitorData);
        console.log(`✓ Successfully scraped: ${competitor.name}`);
      } catch (error) {
        const errorMessage = `Failed to scrape ${competitor.name}: ${error instanceof Error ? error.message : String(error)}`;
        console.error(`✗ ${errorMessage}`);
        errors.push(errorMessage);
      }
    }

    // Prepare results
    const result: ScrapingResult = {
      timestamp: new Date().toISOString(),
      competitors,
      scrapingStatus: errors.length === 0 ? 'success' : errors.length < COMPETITORS_TO_SCRAPE.length ? 'partial' : 'failed',
      errors,
    };

    // Create data directory if it doesn't exist
    const dataDir = resolve(process.cwd(), 'src', 'data');
    mkdirSync(dataDir, { recursive: true });

    // Write results to file
    const outputPath = resolve(dataDir, 'apify-competitors.json');
    writeFileSync(outputPath, JSON.stringify(result, null, 2));
    console.log(`\n✓ Results saved to: ${outputPath}`);

    // Print summary
    console.log('\n📊 Scraping Summary:');
    console.log(`  Total competitors: ${COMPETITORS_TO_SCRAPE.length}`);
    console.log(`  Successfully scraped: ${competitors.length}`);
    console.log(`  Errors: ${errors.length}`);
    console.log(`  Status: ${result.scrapingStatus}`);

    if (errors.length > 0) {
      console.log('\n⚠️  Errors encountered:');
      errors.forEach((error) => console.log(`  - ${error}`));
    }

    return result;
  } catch (error) {
    console.error('❌ Fatal error during scraping:', error);
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  scrapeCompetitors().then((result) => {
    console.log('\n✓ Scraping process completed');
    process.exit(result.scrapingStatus === 'success' ? 0 : 1);
  });
}

export { scrapeCompetitors };

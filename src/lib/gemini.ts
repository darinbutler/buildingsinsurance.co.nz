import * as fs from 'fs';
import * as path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

const PROMPT_TEMPLATES = {
  hero: 'Create a cinematic, high-quality photograph of a beautiful NZ suburban home with dramatic sky, professional lighting, showing the full house exterior with modern architecture, gardens, and neighborhood in the background. Style: photorealistic, dramatic clouds, golden hour lighting, New Zealand landscape.',
  coverage: 'Design professional insurance coverage infographic with shield icons showing house protection tiers, emerald and sky blue colors, clean modern design, clear labels for basic, standard, and comprehensive coverage levels.',
  sector_residential: 'Photograph a beautiful, modern NZ family home with well-maintained gardens, natural lighting, welcoming exterior, showing residential character, weatherboard or brick construction, typical to suburban New Zealand neighborhoods.',
  sector_commercial: 'Photograph a modern NZ commercial building with professional architecture, glass facades, signage, urban setting, showing office or retail space typical of New Zealand city centers.',
  sector_landlord: 'Photograph a well-maintained NZ rental property, clean exterior, good condition, showing investment potential, suburban location, typical of rental properties in New Zealand.',
  sector_bodycorp: 'Photograph a modern apartment complex or unit building in New Zealand, multiple units visible, contemporary architecture, good condition, showing body corporate style property.',
  team: 'Professional photograph of a diverse insurance team in an office setting, friendly and approachable, showing insurance advisers, modern workspace, New Zealand context, warm and professional atmosphere.',
  comparison: 'Create a professional side-by-side comparison chart with emerald and sky blue accents, showing insurance coverage comparison, checkmarks, features list, modern clean design.',
  contact: 'Photograph a friendly insurance adviser in professional setting, approachable demeanor, office environment, ready to help, warm lighting, New Zealand context.',
  blog: 'Create a professional NZ property editorial photograph suitable for blog articles, showing buildings, homes, or insurance-related imagery, high quality, editorial style.',
};

interface ImageResponse {
  url?: string;
  error?: string;
}

const imageCache = new Map<string, string>();

export function getSectorPrompt(sector: string): string {
  const basePrompt = PROMPT_TEMPLATES[sector as keyof typeof PROMPT_TEMPLATES];
  if (!basePrompt) {
    return PROMPT_TEMPLATES.hero;
  }
  return basePrompt.replace('[SECTOR]', sector);
}

export function getGradientPlaceholder(): string {
  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0EA5E9;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#10B981;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#grad)" />
      <text x="50%" y="50%" font-size="48" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="system-ui, -apple-system, sans-serif">
        Buildings Insurance NZ
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

async function extractBase64FromResponse(response: any): Promise<string | null> {
  try {
    if (response.candidates && response.candidates[0]) {
      const content = response.candidates[0].content;
      if (content && content.parts) {
        for (const part of content.parts) {
          if (part.inlineData && part.inlineData.data) {
            return part.inlineData.data;
          }
        }
      }
    }
    return null;
  } catch (error) {
    console.error('Error extracting base64 from response:', error);
    return null;
  }
}

export async function generateImage(prompt: string): Promise<string> {
  try {
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('GOOGLE_GEMINI_API_KEY not set, using gradient placeholder');
      return getGradientPlaceholder();
    }

    const client = new GoogleGenerativeAI(apiKey);
    const model = client.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await (model as any).generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    const base64Data = await extractBase64FromResponse(response.response);

    if (base64Data) {
      try {
        const publicDir = path.join(process.cwd(), 'public', 'generated');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true });
        }

        const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.png`;
        const filepath = path.join(publicDir, filename);
        fs.writeFileSync(filepath, Buffer.from(base64Data, 'base64'));

        return `/generated/${filename}`;
      } catch (error) {
        console.error('Error saving image to disk:', error);
        return getGradientPlaceholder();
      }
    }

    return getGradientPlaceholder();
  } catch (error) {
    console.error('Error generating image with Gemini:', error);
    return getGradientPlaceholder();
  }
}

export async function generateImageBatch(
  prompts: Record<string, string>
): Promise<Record<string, string>> {
  const results: Record<string, string> = {};

  for (const [key, prompt] of Object.entries(prompts)) {
    results[key] = await generateImage(prompt);
  }

  return results;
}

export async function getCachedOrGenerateImage(
  key: string,
  prompt: string
): Promise<string> {
  if (imageCache.has(key)) {
    return imageCache.get(key)!;
  }

  const imageUrl = await generateImage(prompt);
  imageCache.set(key, imageUrl);
  return imageUrl;
}

export function clearImageCache(): void {
  imageCache.clear();
}

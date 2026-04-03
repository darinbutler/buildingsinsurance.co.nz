const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.GOOGLE_GEMINI_API_KEY || "";

const PROMPTS = {
  "hero.png": "Cinematic wide-angle photograph of a beautiful modern New Zealand suburban home with a dramatic sky at golden hour. Warm lighting, professional real estate photography style. Emerald green garden, well-maintained property.",
  "coverage.png": "Professional illustration of insurance coverage tiers showing a house protected by shield icons with different levels. Clean, modern design with blue and emerald green colours. Infographic style.",
  "residential.png": "Beautiful New Zealand family home in a suburban neighbourhood. Well-maintained weatherboard or brick house with garden. Warm afternoon light. Professional photography.",
  "commercial.png": "Modern commercial office building in a New Zealand city. Glass and steel architecture, professional business district. Clear sky. Architectural photography.",
  "landlord.png": "New Zealand rental property, tidy residential investment property. For-rent sign visible. Suburban setting. Professional real estate photography.",
  "bodycorp.png": "Modern apartment complex in New Zealand city. Multi-storey residential building. Clean architecture, well-maintained common areas. Aerial or wide-angle view.",
  "about.png": "Professional diverse team of insurance advisers in a modern office meeting room. Friendly, approachable, confident. Auckland, New Zealand setting.",
  "contact.png": "Friendly insurance adviser meeting with a homeowner at a desk. Professional, warm setting. Trust and communication. Modern office.",
  "blog.png": "Aerial view of New Zealand suburban neighbourhood with houses and properties. Editorial style photography. Beautiful landscape.",
  "compare.png": "Side-by-side comparison of different New Zealand houses with insurance shield overlay. Professional infographic style. Blue and green colours."
};

// SVG placeholder fallback
function createSVGPlaceholder(filename) {
  const title = filename.replace('.png', '').replace(/([A-Z])/g, ' $1').trim();
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0EA5E9;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#10B981;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#grad)" />
    <text x="50%" y="40%" font-size="48" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="system-ui, -apple-system, sans-serif">
      ${title}
    </text>
    <text x="50%" y="60%" font-size="24" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,255,255,0.8)" font-family="system-ui, -apple-system, sans-serif">
      Generated placeholder
    </text>
  </svg>`;
  return svg;
}

async function extractBase64FromResponse(response) {
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

async function generateImage(filename, prompt) {
  try {
    console.log(`\nGenerating ${filename}...`);

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const response = await model.generateContent({
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
      const filepath = path.join(outputDir, filename);
      fs.writeFileSync(filepath, Buffer.from(base64Data, 'base64'));
      console.log(`✓ Saved ${filename}`);
      return true;
    } else {
      console.log(`✗ No image data received for ${filename}, using SVG placeholder`);
      const svgData = createSVGPlaceholder(filename);
      const svgPath = path.join(outputDir, filename.replace('.png', '.svg'));
      fs.writeFileSync(svgPath, svgData);
      console.log(`✓ Saved ${filename.replace('.png', '.svg')} (placeholder)`);
      return false;
    }
  } catch (error) {
    console.error(`Error generating ${filename}:`, error.message);
    const svgData = createSVGPlaceholder(filename);
    const svgPath = path.join(outputDir, filename.replace('.png', '.svg'));
    fs.writeFileSync(svgPath, svgData);
    console.log(`✓ Saved ${filename.replace('.png', '.svg')} (fallback)`);
    return false;
  }
}

async function main() {
  console.log('Starting image generation...\n');
  console.log(`Output directory: ${outputDir}\n`);

  let successCount = 0;
  let fallbackCount = 0;

  for (const [filename, prompt] of Object.entries(PROMPTS)) {
    const success = await generateImage(filename, prompt);
    if (success) {
      successCount++;
    } else {
      fallbackCount++;
    }
    // Add delay between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log(`\n\n=== Generation Complete ===`);
  console.log(`Total files: ${Object.keys(PROMPTS).length}`);
  console.log(`Generated from Gemini: ${successCount}`);
  console.log(`Fallback placeholders: ${fallbackCount}`);
  console.log(`\nFiles saved to: ${outputDir}`);
}

// Create output directory
const outputDir = path.join(process.cwd(), 'public', 'generated');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created directory: ${outputDir}\n`);
}

main().catch(console.error);

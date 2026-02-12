import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const STITCH_SCREENSHOT = join(__dirname, '../../ui/stich-export/roadgenietms_login/screen.png');
const OUTPUT_FILE = join(__dirname, '../src/assets/login/login-bg.png');
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;
const DARK_NAVY = '#07121b';

async function generateLoginBackground() {
    try {
        console.log('🎨 Generating login background...');

        // 1. Load the Stitch screenshot
        console.log('📸 Loading Stitch screenshot...');
        const screenshot = sharp(STITCH_SCREENSHOT);
        const metadata = await screenshot.metadata();
        console.log(`   Screenshot size: ${metadata.width}x${metadata.height}`);

        // 2. Remove outer border/margins (estimate ~16px each side)
        const borderSize = 16;
        const innerWidth = metadata.width - (borderSize * 2);
        const innerHeight = metadata.height - (borderSize * 2);

        console.log('✂️  Cropping border...');
        const croppedScreenshot = await screenshot
            .extract({
                left: borderSize,
                top: borderSize,
                width: innerWidth,
                height: innerHeight
            })
            .toBuffer();

        // 3. Crop the top ~52% (truck hero area)
        const heroHeightPercent = 0.52;
        const heroHeight = Math.floor(innerHeight * heroHeightPercent);

        console.log('🚛 Extracting truck hero area...');
        const heroImage = await sharp(croppedScreenshot)
            .extract({
                left: 0,
                top: 0,
                width: innerWidth,
                height: heroHeight
            })
            .toBuffer();

        // 4. Resize hero to cover canvas width (maintaining aspect ratio)
        const targetHeroHeight = Math.floor(CANVAS_HEIGHT * 0.55);
        console.log('📐 Resizing hero image...');
        const resizedHero = await sharp(heroImage)
            .resize(CANVAS_WIDTH, targetHeroHeight, {
                fit: 'cover',
                position: 'center'
            })
            .toBuffer();

        // 5. Create base canvas with dark navy background
        console.log('🖼️  Creating canvas...');
        const baseCanvas = await sharp({
            create: {
                width: CANVAS_WIDTH,
                height: CANVAS_HEIGHT,
                channels: 4,
                background: DARK_NAVY
            }
        })
            .png()
            .toBuffer();

        // 6. Composite hero image on canvas at top
        console.log('🎭 Compositing hero image...');
        const withHero = await sharp(baseCanvas)
            .composite([
                {
                    input: resizedHero,
                    top: 0,
                    left: 0
                }
            ])
            .toBuffer();

        // 7. Create gradient overlay SVG
        console.log('🌈 Adding gradient overlay...');
        const gradientOverlay = Buffer.from(`
      <svg width="${CANVAS_WIDTH}" height="${CANVAS_HEIGHT}">
        <defs>
          <!-- Vertical gradient: transparent -> dark navy -->
          <linearGradient id="verticalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:rgba(7,18,27,0);stop-opacity:0" />
            <stop offset="45%" style="stop-color:rgba(7,18,27,0.3);stop-opacity:1" />
            <stop offset="65%" style="stop-color:rgba(7,18,27,0.85);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(7,18,27,0.98);stop-opacity:1" />
          </linearGradient>
          
          <!-- Radial vignette -->
          <radialGradient id="vignette" cx="50%" cy="40%" r="70%">
            <stop offset="0%" style="stop-color:rgba(0,0,0,0);stop-opacity:0" />
            <stop offset="70%" style="stop-color:rgba(0,0,0,0.1);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(0,0,0,0.4);stop-opacity:1" />
          </radialGradient>
        </defs>
        
        <!-- Apply vertical gradient -->
        <rect width="${CANVAS_WIDTH}" height="${CANVAS_HEIGHT}" fill="url(#verticalGrad)" />
        
        <!-- Apply vignette -->
        <rect width="${CANVAS_WIDTH}" height="${CANVAS_HEIGHT}" fill="url(#vignette)" />
      </svg>
    `);

        // 8. Final composite with gradient overlay
        const final = await sharp(withHero)
            .composite([
                {
                    input: gradientOverlay,
                    top: 0,
                    left: 0
                }
            ])
            .png({ quality: 90, compressionLevel: 9 })
            .toFile(OUTPUT_FILE);

        console.log(`✅ Login background generated successfully!`);
        console.log(`   Output: ${OUTPUT_FILE}`);
        console.log(`   Size: ${final.width}x${final.height}, ${(final.size / 1024).toFixed(2)} KB`);

    } catch (error) {
        console.error('❌ Error generating login background:', error);
        process.exit(1);
    }
}

generateLoginBackground();

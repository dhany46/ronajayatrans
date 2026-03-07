import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const imagesDir = path.join(publicDir, 'images');

// Function to recursively find all images
function findImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findImages(filePath, fileList);
        } else if (/\.(png|jpe?g)$/i.test(filePath)) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

// Function to convert an image to webp
async function convertToWebp(filePath) {
    const parsedPath = path.parse(filePath);
    const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

    try {
        await sharp(filePath)
            .webp({ quality: 80, effort: 6 }) // High quality, good compression
            .toFile(webpPath);
        console.log(`Converted: ${filePath} -> ${webpPath}`);

        // Uncomment the line below to immediately delete original PNGs if desired
        // fs.unlinkSync(filePath); 
    } catch (error) {
        console.error(`Error converting ${filePath}:`, error);
    }
}

async function convertAll() {
    console.log(`Scanning directory: ${imagesDir}`);
    const imagesToConvert = findImages(imagesDir);

    // Also include the hero background if it's there
    const heroBg = path.join(publicDir, 'hero-bg.png');
    if (fs.existsSync(heroBg)) {
        imagesToConvert.push(heroBg);
    }

    console.log(`Found ${imagesToConvert.length} images to convert.`);

    const conversionPromises = imagesToConvert.map(convertToWebp);
    await Promise.all(conversionPromises);

    console.log('🎉 All images converted to WebP successfully!');
}

convertAll();

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const optimizeImages = async (dir) => {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.lstat(filePath);

    if (stat.isDirectory()) {
      await optimizeImages(filePath);
    } else if (/\.(jpg|jpeg|png)$/.test(filePath)) {
      const optimizedFilePath = filePath.replace(/\.(jpg|jpeg|png)$/, '.webp');
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(optimizedFilePath);
      console.log(`Optimized ${filePath} to ${optimizedFilePath}`);
    }
  }
};

optimizeImages(path.join(process.cwd(), 'public')).catch(console.error);

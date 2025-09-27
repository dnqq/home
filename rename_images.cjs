const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
const files = fs.readdirSync(imagesDir);

// 过滤出所有.jpg和.png文件
const imageFiles = files.filter(file => {
  const ext = path.extname(file);
  return ext === '.jpg' || ext === '.png';
});

// 按照新的格式重命名文件
imageFiles.forEach((file, index) => {
  const oldPath = path.join(imagesDir, file);
  const ext = path.extname(file);
  const newPath = path.join(imagesDir, `background${index + 1}${ext}`);
  fs.renameSync(oldPath, newPath);
  console.log(`Renamed ${file} to background${index + 1}${ext}`);
});
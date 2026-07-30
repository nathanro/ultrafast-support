const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'public', 'images');

// Ensure directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  { name: 'hero-wp.png', width: 1200, height: 800, bgColor: '#1a4d2e', text: 'WordPress Dashboard', textColor: '#ffffff' },
  { name: 'hero-it.png', width: 1200, height: 800, bgColor: '#4a1d5e', text: 'AI Automation', textColor: '#ffffff' },
  { name: 'feature-backup.png', width: 800, height: 600, bgColor: '#0d7377', text: 'Backups', textColor: '#ffffff' },
  { name: 'feature-security.png', width: 800, height: 600, bgColor: '#047857', text: 'Security', textColor: '#ffffff' },
  { name: 'feature-performance.png', width: 800, height: 600, bgColor: '#0f766e', text: 'Performance', textColor: '#ffffff' },
  { name: 'og-image.png', width: 1200, height: 630, bgColor: 'linear-gradient', text: 'UltraFast Support', textColor: '#ffffff' }
];

images.forEach(img => {
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  
  // Background
  if (img.bgColor === 'linear-gradient') {
    const gradient = ctx.createLinearGradient(0, 0, img.width, img.height);
    gradient.addColorStop(0, '#1a4d2e');
    gradient.addColorStop(0.5, '#0d7377');
    gradient.addColorStop(1, '#4a1d5e');
    ctx.fillStyle = gradient;
  } else {
    ctx.fillStyle = img.bgColor;
  }
  ctx.fillRect(0, 0, img.width, img.height);
  
  // Text
  const fontSize = Math.floor(Math.min(img.width, img.height) / 10);
  ctx.fillStyle = img.textColor;
  ctx.font = 'bold ' + fontSize + 'px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(img.text, img.width / 2, img.height / 2);
  
  // Save
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, img.name), buffer);
  console.log('Created: ' + img.name + ' (' + img.width + 'x' + img.height + ')');
});

console.log('All placeholder images created successfully!');

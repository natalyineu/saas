const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage, registerFont } = require('canvas');

// Configuration - only include the 5 new articles
const WIDTH = 1200;
const HEIGHT = 630;
const BLOG_POSTS = [
  {
    id: "connected-tv-ad-campaign",
    title: "Connected TV Ad Campaign Mastery",
    subtitle: "Strategies for the Streaming Age",
    primaryColor: "#7C3AED", // Vibrant purple
    secondaryColor: "#EC4899", // Pink
    bgColor: "#F9FAFB"
  },
  {
    id: "pinterest-ad-campaign",
    title: "Pinterest Ad Campaign Guide",
    subtitle: "Visual Discovery Marketing Success",
    primaryColor: "#E60023", // Pinterest red
    secondaryColor: "#BD081C", // Darker Pinterest red
    bgColor: "#F9FAFB"
  },
  {
    id: "yahoo-dsp-ad-campaign",
    title: "Yahoo DSP Campaign Guide",
    subtitle: "Cross-Channel Advertising Strategies",
    primaryColor: "#6001D2", // Yahoo purple
    secondaryColor: "#400090", // Darker purple
    bgColor: "#F9FAFB"
  },
  {
    id: "xandr-ad-campaign",
    title: "Maximizing ROI with Xandr",
    subtitle: "Advanced Ad Campaign Strategies",
    primaryColor: "#00A0DF", // Xandr blue
    secondaryColor: "#0078D7", // Darker blue
    bgColor: "#F9FAFB"
  },
  {
    id: "google-ads-search-campaign",
    title: "Google Ads Search Campaigns",
    subtitle: "Strategies for Boosting ROI",
    primaryColor: "#4285F4", // Google blue
    secondaryColor: "#34A853", // Google green
    bgColor: "#F9FAFB"
  }
];

// Create directory if it doesn't exist
const outputDir = path.join(__dirname, '../public/images/blog');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to create an image in the style of existing blog images
async function createImage(post) {
  console.log(`Creating image for ${post.id}...`);
  
  // Create canvas
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');
  
  // Fill background
  ctx.fillStyle = post.bgColor;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  
  // Create a subtle pattern in the background
  ctx.save();
  ctx.globalAlpha = 0.05;
  for (let x = 0; x < WIDTH; x += 50) {
    for (let y = 0; y < HEIGHT; y += 50) {
      const size = 2;
      ctx.fillStyle = post.primaryColor;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
  
  // Add a header bar with gradient
  const gradientHeight = 90;
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, 0);
  gradient.addColorStop(0, post.primaryColor);
  gradient.addColorStop(1, post.secondaryColor);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, gradientHeight);
  
  // Add AI-Vertise Boost logo text to the header
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 32px Arial';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('AI-Vertise Boost', 40, gradientHeight / 2);
  
  // Add a decorative element
  ctx.beginPath();
  ctx.moveTo(0, gradientHeight);
  ctx.lineTo(WIDTH, gradientHeight);
  ctx.strokeStyle = '#E5E7EB';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Draw main title
  ctx.fillStyle = '#111827';
  ctx.font = 'bold 56px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(post.title, WIDTH / 2, HEIGHT / 2 - 40);
  
  // Draw subtitle
  ctx.fillStyle = '#4B5563';
  ctx.font = '40px Arial';
  ctx.fillText(post.subtitle, WIDTH / 2, HEIGHT / 2 + 40);
  
  // Add decorative line below subtitle
  const lineWidth = 100;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - lineWidth / 2, HEIGHT / 2 + 80);
  ctx.lineTo(WIDTH / 2 + lineWidth / 2, HEIGHT / 2 + 80);
  ctx.strokeStyle = gradient;
  ctx.lineWidth = 4;
  ctx.stroke();
  
  // Add website URL at bottom
  ctx.fillStyle = '#6B7280';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ai-vertise.com', WIDTH / 2, HEIGHT - 40);
  
  // Save image
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(path.join(outputDir, `${post.id}.jpg`), buffer);
  
  console.log(`Created image for ${post.id}`);
}

// Generate all images
async function generateImages() {
  console.log('Generating blog images...');
  
  for (const post of BLOG_POSTS) {
    await createImage(post);
  }
  
  console.log('All images generated successfully!');
}

generateImages().catch(err => {
  console.error('Error generating images:', err);
}); 
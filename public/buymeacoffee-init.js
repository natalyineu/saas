// This script initializes the Buy Me Coffee button
document.addEventListener('DOMContentLoaded', function() {
  // Check if the script is already loaded
  if (!document.querySelector('script[src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"]')) {
    const script = document.createElement('script');
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js";
    script.setAttribute('data-name', 'bmc-button');
    script.setAttribute('data-slug', 'aivertise');
    script.setAttribute('data-color', '#5F7FFF');
    script.setAttribute('data-emoji', '🎯');
    script.setAttribute('data-font', 'Inter');
    script.setAttribute('data-text', 'Buy an Ads package');
    script.setAttribute('data-outline-color', '#000000');
    script.setAttribute('data-font-color', '#ffffff');
    script.setAttribute('data-coffee-color', '#FFDD00');
    script.setAttribute('data-url', 'https://buymeacoffee.com/aivertise/membership');
    
    // Try to append to the bmc-container if it exists
    const container = document.getElementById('bmc-container');
    if (container) {
      container.appendChild(script);
    } else {
      // Fallback to appending to body
      document.body.appendChild(script);
    }
  }
}); 
'use client';

import Script from 'next/script';

export default function BuyMeCoffeeScript() {
  return (
    <>
      <Script
        id="buy-me-coffee-script"
        src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
        data-name="bmc-button"
        data-slug="aivertise"
        data-color="#5F7FFF"
        data-emoji="🎯"
        data-font="Nunito"
        data-text="Buy an Ads package"
        data-outline-color="#000000"
        data-font-color="#ffffff"
        data-coffee-color="#FFDD00"
        data-url="https://buymeacoffee.com/aivertise/membership"
        strategy="afterInteractive"
      />
      <Script
        id="buy-me-coffee-init"
        src="/buymeacoffee-init.js"
        strategy="afterInteractive"
      />
    </>
  );
} 
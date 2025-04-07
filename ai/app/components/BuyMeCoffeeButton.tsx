'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function BuyMeCoffeeButton() {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up any existing button when the component unmounts
    return () => {
      if (buttonRef.current) {
        while (buttonRef.current.firstChild) {
          buttonRef.current.removeChild(buttonRef.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <div className="buy-me-coffee-container">
      <div ref={buttonRef} className="mt-4"></div>
      <Script
        id="buy-me-coffee-script"
        src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
        onLoad={() => {
          // The script creates its own button when loaded
          if (typeof window !== 'undefined' && window.document) {
            const btn = document.createElement('script');
            btn.setAttribute('data-name', 'bmc-button');
            btn.setAttribute('data-slug', 'aivertise');
            btn.setAttribute('data-color', '#5F7FFF');
            btn.setAttribute('data-emoji', '🎯');
            btn.setAttribute('data-font', 'Comic');
            btn.setAttribute('data-text', 'Buy an Ads package');
            btn.setAttribute('data-outline-color', '#000000');
            btn.setAttribute('data-font-color', '#ffffff');
            btn.setAttribute('data-coffee-color', '#FFDD00');
            btn.setAttribute('data-url', 'https://buymeacoffee.com/aivertise/membership');
            btn.setAttribute('type', 'text/javascript');
            
            if (buttonRef.current) {
              buttonRef.current.appendChild(btn);
            }
          }
        }}
        strategy="afterInteractive"
      />
    </div>
  );
} 
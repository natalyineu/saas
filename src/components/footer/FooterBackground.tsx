import React from 'react';

export function FooterPattern() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="footer-pattern" patternUnits="userSpaceOnUse" width="80" height="80" patternTransform="rotate(45)">
            <circle cx="10" cy="10" r="1.5" fill="white" />
            <circle cx="40" cy="40" r="2" fill="white" />
            <circle cx="70" cy="10" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-pattern)" />
      </svg>
    </div>
  );
}

export function FooterGlowOrbs() {
  return (
    <>
      <div className="absolute -top-20 -right-20 w-40 md:w-64 h-40 md:h-64 rounded-full bg-gradient-to-r from-primary-purple/20 to-primary-pink/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 md:w-64 h-40 md:h-64 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl"></div>
    </>
  );
}

export default function FooterBackground() {
  return (
    <>
      <FooterPattern />
      <FooterGlowOrbs />
    </>
  );
} 
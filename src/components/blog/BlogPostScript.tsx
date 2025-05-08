'use client';

import { useEffect } from 'react';
import Script from 'next/script';

/**
 * Component that handles optimization for blog post images and other performance enhancements
 */
export default function BlogPostScript() {
  // Add lazy loading to non-critical images after the page loads
  useEffect(() => {
    const optimizeImages = () => {
      // Find all images on the page that aren't marked as priority
      const images = document.querySelectorAll('img:not([priority])');
      
      // Skip the first image (usually the hero image) and add lazy loading to the rest
      images.forEach((img, index) => {
        if (index > 0 && !img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Ensure all images have alt text for accessibility and SEO
        if (!img.hasAttribute('alt') || img.getAttribute('alt') === '') {
          const parentHeading = img.closest('figure')?.querySelector('figcaption');
          const nearestHeading = img.closest('div')?.querySelector('h1, h2, h3, h4, h5, h6');
          
          // Try to derive an alt text from nearby content
          const altText = parentHeading?.textContent || 
                          nearestHeading?.textContent || 
                          'Blog post image';
          
          img.setAttribute('alt', altText);
        }
      });
    };

    // Run after the page has loaded
    if (document.readyState === 'complete') {
      optimizeImages();
    } else {
      window.addEventListener('load', optimizeImages);
      return () => window.removeEventListener('load', optimizeImages);
    }
  }, []);

  return (
    <>
      {/* Add structured data for the blog article */}
      <Script id="image-optimization" strategy="afterInteractive">
        {`
          // Improve CLS by setting dimensions on images that don't have them
          setTimeout(() => {
            document.querySelectorAll('img:not([width]):not([height])').forEach(img => {
              if (img.naturalWidth > 0 && img.naturalHeight > 0) {
                img.setAttribute('width', img.naturalWidth.toString());
                img.setAttribute('height', img.naturalHeight.toString());
              }
            });
          }, 1000);
        `}
      </Script>
    </>
  );
} 
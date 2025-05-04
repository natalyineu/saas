'use client';

/**
 * This script helps handle hydration mismatches caused by browser extensions
 * like Bitdefender that add attributes like bis_skin_checked to HTML elements
 */

let observer: MutationObserver | null = null;

/**
 * Cleans up browser extension attributes that cause hydration mismatches
 * @returns A cleanup function to disconnect the observer when no longer needed
 */
export function cleanupBrowserExtensionAttributes() {
  if (typeof window === 'undefined') return;
  
  try {
    // Clean up any existing observer to prevent multiple observers
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    
    // Clean up any bis_skin_checked attributes
    document.querySelectorAll('[bis_skin_checked]').forEach(el => {
      el.removeAttribute('bis_skin_checked');
    });
    
    // Create a new observer to clean up attributes added after hydration
    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'bis_skin_checked') {
          (mutation.target as HTMLElement).removeAttribute('bis_skin_checked');
        }
      });
    });
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, { 
      attributes: true, 
      subtree: true, 
      attributeFilter: ['bis_skin_checked'] 
    });
    
    // Return a cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };
  } catch (e) {
    console.error('Error cleaning up browser extension attributes:', e);
  }
} 
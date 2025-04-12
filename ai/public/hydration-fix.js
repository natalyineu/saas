// Script to clean up browser extension attributes before React hydration
(function() {
  try {
    // Function to clean up attributes
    function cleanupAttributes() {
      document.querySelectorAll('[bis_skin_checked]').forEach(function(el) {
        el.removeAttribute('bis_skin_checked');
      });
    }
    
    // Run immediately
    cleanupAttributes();
    
    // Also set up a MutationObserver to handle future additions
    if (typeof MutationObserver !== 'undefined') {
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'bis_skin_checked') {
            mutation.target.removeAttribute('bis_skin_checked');
          }
        });
      });
      
      // Start observing once DOM is loaded
      document.addEventListener('DOMContentLoaded', function() {
        observer.observe(document.body, { 
          attributes: true, 
          subtree: true, 
          attributeFilter: ['bis_skin_checked'] 
        });
      });
    }
  } catch (e) {
    // Silently fail - we don't want to break anything
    console.error('Error in hydration-fix script:', e);
  }
})(); 
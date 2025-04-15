// Script to clean up browser extension attributes before React hydration
(function() {
  try {
    // Prevent hydration errors from browser extensions that modify the DOM
    if (typeof window !== 'undefined') {
      // Remove attributes added by browser extensions
      document.querySelectorAll('[bis_skin_checked]').forEach(function(el) {
        el.removeAttribute('bis_skin_checked');
      });
      
      // Set a flag to tell React this DOM was pre-processed
      window.__NEXT_HYDRATION_FIX = true;
    }
  } catch (e) {
    // Silent fail - don't break anything if this fails
    console.error('Hydration fix error:', e);
  }
})(); 
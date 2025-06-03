/**
 * Site-wide optimization script
 */

// Helper function to check WebP support
function supportsWebP() {
  if (document.documentElement.classList.contains('webp')) return true;
  if (document.documentElement.classList.contains('no-webp')) return false;
  
  return document.createElement('canvas')
    .toDataURL('image/webp')
    .indexOf('data:image/webp') === 0;
}

// Main optimization function
function optimizePageLoading() {
  // Lazily load offscreen images
  if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;
          
          if (src) {
            // Create new image to preload
            const newImg = new Image();
            newImg.onload = function() {
              img.src = src;
              img.classList.add('loaded');
            };
            newImg.src = src;
          }
          
          // Stop observing
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '100px 0px',
      threshold: 0.01
    });
    
    // Apply to all lazy images across the site
    document.querySelectorAll('img[data-src]').forEach(function(img) {
      if (!img.classList.contains('lazy-load-img') && 
          !img.classList.contains('lazy-faq-image') && 
          !img.classList.contains('lazy-program-image') && 
          !img.classList.contains('optimized-image')) {
        lazyImageObserver.observe(img);
      }
    });
  }
  
  // Optimize third-party resources
  setTimeout(function() {
    // Load non-critical CSS
    const nonCriticalCSS = document.querySelectorAll('link[rel="stylesheet"][data-load="defer"]');
    nonCriticalCSS.forEach(function(link) {
      link.setAttribute('rel', 'stylesheet');
    });
    
    // Load non-critical scripts
    const deferredScripts = document.querySelectorAll('script[data-src]');
    deferredScripts.forEach(function(script) {
      script.src = script.dataset.src;
    });
  }, 1000);
}

// Execute when DOM is ready
if (document.readyState !== 'loading') {
  optimizePageLoading();
} else {
  document.addEventListener('DOMContentLoaded', optimizePageLoading);
}

// Additional optimizations after window load
window.addEventListener('load', function() {
  // Mark page as fully loaded
  document.body.classList.add('page-loaded');
  
  // Prefetch next likely pages
  setTimeout(function() {
    const links = [
      'index.php', 
      'about.php', 
      'gallery.php',
      'contact.php'
    ];
    
    links.forEach(function(link) {
      const prefetchLink = document.createElement('link');
      prefetchLink.rel = 'prefetch';
      prefetchLink.href = link;
      document.head.appendChild(prefetchLink);
    });
  }, 3000);
});

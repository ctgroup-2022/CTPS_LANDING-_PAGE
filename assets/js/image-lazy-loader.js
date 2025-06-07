/**
 * Optimized image lazy loader
 * Reduces initial load time and improves performance
 */
document.addEventListener('DOMContentLoaded', function() {
    // Use requestIdleCallback for non-critical operations
    const scheduleLazyLoad = window.requestIdleCallback || window.requestAnimationFrame;
    
    scheduleLazyLoad(() => {
        if ('IntersectionObserver' in window) {
            // Create a single reusable observer
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        loadImage(entry.target, observer);
                    }
                });
            }, {
                rootMargin: '100px 0px', // Increased rootMargin for earlier loading
                threshold: 0.01
            });
            
            // Observe all images except the first one (which loads immediately)
            document.querySelectorAll('.optimized-image:not(.first-image)').forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            loadAllImages();
        }
    });
    
    // Extracted image loading logic for better code organization
    function loadImage(img, observer) {
        // Find picture source elements if they exist (for WebP)
        const picture = img.closest('picture');
        if (picture) {
            const sources = picture.querySelectorAll('source');
            sources.forEach(source => {
                if (source.dataset.srcset) {
                    source.srcset = source.dataset.srcset;
                }
            });
        }
        
        // Apply srcset and sizes if available
        if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
            img.sizes = img.dataset.sizes || '';
        }
        
        // Apply src after a tiny delay to prioritize srcset loading
        if (img.dataset.src) {
            // Add loading class
            img.classList.add('loading');
            
            // Set src immediately - delay not really needed with modern browsers
            img.src = img.dataset.src;
            
            // Listen for image load
            img.onload = function() {
                img.classList.remove('loading');
                img.classList.add('loaded');
            };
            
            // Handle errors - Fixed to prevent infinite loops
            img.onerror = function() {
                img.classList.remove('loading');
                img.classList.add('error');
                
                // Prevent infinite error loops by checking if already using fallback
                if (!img.src.includes('error-image.jpg')) {
                    // Check if error image exists first
                    const errorImg = new Image();
                    errorImg.onload = function() {
                        img.src = 'assets/placeholders/error-image.jpg';
                    };
                    errorImg.onerror = function() {
                        // If error image doesn't exist, use a data URI as fallback
                        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cpath fill="%23ccc" d="M21 5v14h-18v-14h18m0-2h-18a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2v-14a2 2 0 00-2-2z"/%3E%3Cpath fill="%23ccc" d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6h-14l3.5-4.5z"/%3E%3C/svg%3E';
                    };
                    errorImg.src = 'assets/placeholders/error-image.jpg';
                }
            };
        }
        
        observer && observer.unobserve(img);
    }
    
    // Fallback function to load all images
    function loadAllImages() {
        document.querySelectorAll('.optimized-image').forEach(img => {
            loadImage(img);
        });
    }
});

/**
 * Enhanced mobile experience for events popup
 * Adds touch gestures and optimizes for smaller screens
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile enhancements after popup is loaded
    document.addEventListener('click', function(e) {
        // Check if click is on a popup trigger
        if (e.target.closest('.circular-event-card') || 
            e.target.closest('.learn-more-btn')) {
            
            // Wait for popup to appear
            setTimeout(initMobileEnhancements, 800);
        }
    });
    
    /**
     * Initialize mobile-specific enhancements
     */
    function initMobileEnhancements() {
        // Enable touch swiping for event cards
        enableCardSwipe();
        
        // Adjust popup for better mobile viewing
        optimizeForMobile();
        
        // Add special handling for landscape orientation
        handleOrientationChanges();
    }
    
    /**
     * Enable touch swipe gestures for card navigation
     */
    function enableCardSwipe() {
        const cardContainer = document.querySelector('.event-card-scroll-container');
        if (!cardContainer) return;
        
        let startX, currentTranslate = 0, prevTranslate = 0, isDragging = false;
        const cards = cardContainer.querySelectorAll('.event-card');
        if (cards.length <= 1) return;
        
        // Calculate card width including gap
        const cardWidth = cards[0].offsetWidth + 20; // width + gap
        
        // Touch events for mobile
        cardContainer.addEventListener('touchstart', touchStart);
        cardContainer.addEventListener('touchmove', touchMove);
        cardContainer.addEventListener('touchend', touchEnd);
        
        /**
         * Handle touch start
         */
        function touchStart(e) {
            e.preventDefault();
            startX = e.touches[0].clientX;
            isDragging = true;
            
            // Pause auto-scroll if it exists
            if (window.pauseAutoScroll && typeof window.pauseAutoScroll === 'function') {
                window.pauseAutoScroll();
            }
        }
        
        /**
         * Handle touch move
         */
        function touchMove(e) {
            if (!isDragging) return;
            
            const currentX = e.touches[0].clientX;
            const diff = currentX - startX;
            
            // Calculate new translate position
            currentTranslate = prevTranslate + diff;
            
            // Apply boundaries
            const maxTranslate = 0;
            const minTranslate = -((cards.length - 1) * cardWidth);
            
            if (currentTranslate > maxTranslate) {
                currentTranslate = maxTranslate;
            }
            
            if (currentTranslate < minTranslate) {
                currentTranslate = minTranslate;
            }
            
            // Apply transform with easing
            cardContainer.style.transition = 'transform 0.1s ease';
            cardContainer.style.transform = `translateX(${currentTranslate}px)`;
        }
        
        /**
         * Handle touch end
         */
        function touchEnd() {
            isDragging = false;
            
            // Snap to nearest card
            const cardIndex = Math.round(Math.abs(currentTranslate) / cardWidth);
            const snappedTranslate = -cardIndex * cardWidth;
            
            // Apply snapped position
            cardContainer.style.transition = 'transform 0.3s ease';
            cardContainer.style.transform = `translateX(${snappedTranslate}px)`;
            prevTranslate = snappedTranslate;
            currentTranslate = snappedTranslate;
            
            // Update active card
            updateActiveCard(cardIndex);
            
            // Update card pagination dots
            updatePaginationDots(cardIndex);
            
            // Resume auto-scroll after a delay
            setTimeout(() => {
                if (window.resumeAutoScroll && typeof window.resumeAutoScroll === 'function') {
                    window.resumeAutoScroll();
                }
            }, 3000);
        }
        
        /**
         * Update active card state
         */
        function updateActiveCard(index) {
            cards.forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });
            
            // Update global index if it exists
            if (window.currentCardIndex !== undefined) {
                window.currentCardIndex = index;
            }
        }
        
        /**
         * Update pagination dots
         */
        function updatePaginationDots(activeIndex) {
            const dots = document.querySelectorAll('.card-pagination-dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === activeIndex);
            });
        }
    }
    
    /**
     * Optimize popup for mobile viewing
     */
    function optimizeForMobile() {
        const popup = document.querySelector('.enhanced-event-popup');
        if (!popup) return;
        
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Disable 3D effects that might cause performance issues
            disableHeavyEffects();
            
            // Make cards accessible for small screens
            optimizeCards();
            
            // Add accessible focus behavior
            improveAccessibility();
        }
    }
    
    /**
     * Disable heavy effects on mobile
     */
    function disableHeavyEffects() {
        const popup = document.querySelector('.enhanced-event-popup');
        if (!popup) return;
        
        // Remove mousemove event listeners that cause 3D effects
        popup.removeEventListener('mousemove', mouseMoveHandler);
        
        // Remove unnecessary transforms that might affect performance
        const elements = popup.querySelectorAll('.popup-category, .popup-title, .popup-description, .popup-meta-icon');
        elements.forEach(el => {
            if (el.style.transform) {
                // Keep only the essential transforms
                el.style.transform = el.style.transform.replace(/translateZ\([^)]+\)\s*/g, '');
            }
        });
    }
    
    /**
     * Handle orientation changes
     */
    function handleOrientationChanges() {
        window.addEventListener('orientationchange', function() {
            setTimeout(() => {
                optimizeForMobile();
                
                // Adjust heights for better viewing
                adjustPopupHeight();
            }, 300);
        });
        
        // Initial height adjustment
        adjustPopupHeight();
    }
    
    /**
     * Adjust popup height for small screens
     */
    function adjustPopupHeight() {
        const popup = document.querySelector('.enhanced-event-popup');
        if (!popup) return;
        
        const viewportHeight = window.innerHeight;
        const isLandscape = window.innerWidth > window.innerHeight;
        
        // For very small heights, make adjustments
        if (viewportHeight < 500) {
            if (isLandscape) {
                // Handle landscape on small devices
                popup.style.maxHeight = '95vh';
                popup.style.overflow = 'auto';
            } else {
                // Handle portrait on small devices
                popup.style.maxHeight = 'none';
                popup.style.height = 'auto';
            }
        } else {
            // Reset to default
            popup.style.maxHeight = '';
            popup.style.height = '';
        }
    }
    
    /**
     * Optimize cards for mobile
     */
    function optimizeCards() {
        const cards = document.querySelectorAll('.event-card');
        if (!cards.length) return;
        
        cards.forEach(card => {
            // Ensure text doesn't overflow
            const title = card.querySelector('.event-card-title');
            if (title && title.scrollWidth > title.clientWidth) {
                title.setAttribute('title', title.textContent);
            }
            
            // Add tap highlight for better UX
            card.addEventListener('touchstart', function() {
                this.style.backgroundColor = 'rgba(0, 86, 179, 0.03)';
            });
            
            card.addEventListener('touchend', function() {
                this.style.backgroundColor = '';
            });
        });
    }
    
    /**
     * Improve accessibility for mobile
     */
    function improveAccessibility() {
        // Add appropriate aria attributes
        const controls = document.querySelectorAll('.scroll-control-btn');
        controls.forEach(control => {
            control.setAttribute('role', 'button');
            control.setAttribute('tabindex', '0');
            
            // Add keyboard support
            control.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
        
        // Make carousel accessible
        const cardContainer = document.querySelector('.event-card-grid');
        if (cardContainer) {
            cardContainer.setAttribute('role', 'region');
            cardContainer.setAttribute('aria-label', 'Event cards carousel');
        }
    }
    
    /**
     * Mousemove event handler (for reference, unused in mobile)
     */
    function mouseMoveHandler(e) {
        // This is a placeholder function for the handler that might be attached elsewhere
        // We remove this in the disableHeavyEffects function
        console.log('Mouse move event handled');
    }
});

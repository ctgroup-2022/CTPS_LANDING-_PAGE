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
        
        // Add special handling for orientation changes
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
            
            // Add visual feedback
            cardContainer.style.transition = 'none';
            cards.forEach(card => {
                card.style.transition = 'transform 0.1s ease';
                card.style.transform = 'scale(0.98)';
            });
        }
        
        /**
         * Handle touch move
         */
        function touchMove(e) {
            if (!isDragging) return;
            
            const currentX = e.touches[0].clientX;
            const diff = currentX - startX;
            
            // Update the translation with some resistance at edges
            currentTranslate = prevTranslate + diff;
            
            // Apply constraints with resistance
            const maxTranslate = 0;
            const minTranslate = -((cards.length - 1) * cardWidth);
            
            if (currentTranslate > maxTranslate) {
                currentTranslate = maxTranslate + (currentTranslate - maxTranslate) * 0.2;
            } else if (currentTranslate < minTranslate) {
                currentTranslate = minTranslate + (currentTranslate - minTranslate) * 0.2;
            }
            
            cardContainer.style.transform = `translateX(${currentTranslate}px)`;
        }
        
        /**
         * Handle touch end
         */
        function touchEnd() {
            isDragging = false;
            
            // Reset card scale
            cards.forEach(card => {
                card.style.transform = '';
            });
            
            // Calculate which card is closest after swipe
            const cardIndex = Math.round(Math.abs(currentTranslate / cardWidth));
            const adjustedIndex = Math.min(Math.max(cardIndex, 0), cards.length - 1);
            
            // Snap to the nearest card
            currentTranslate = -adjustedIndex * cardWidth;
            prevTranslate = currentTranslate;
            
            // Apply smooth transition back
            cardContainer.style.transition = 'transform 0.3s ease';
            cardContainer.style.transform = `translateX(${currentTranslate}px)`;
            
            // Update active states
            updateActiveCard(adjustedIndex);
            updatePaginationDots(adjustedIndex);
            
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
        
        // Disable heavy effects that might cause performance issues
        disableHeavyEffects();
        
        // Make touch targets more finger-friendly
        improveTouchTargets();
        
        // Adjust heights for better viewing
        adjustPopupHeight();
        
        // Make cards accessible for small screens
        optimizeCards();
    }
    
    /**
     * Disable heavy effects on mobile
     */
    function disableHeavyEffects() {
        const popup = document.querySelector('.enhanced-event-popup');
        if (!popup) return;
        
        // Remove mousemove event listeners that cause 3D effects
        popup.removeEventListener('mousemove', window.mouseMoveHandler || function(){});
        
        // Use simple fade transitions instead of 3D ones
        popup.style.transition = 'opacity 0.4s ease';
    }
    
    /**
     * Improve touch targets for mobile
     */
    function improveTouchTargets() {
        // Make buttons larger and more tappable
        const buttons = document.querySelectorAll('.scroll-control-btn, .popup-share-btn, .enhanced-popup-close');
        buttons.forEach(btn => {
            btn.style.minHeight = '44px';
            btn.style.minWidth = '44px';
        });
        
        // Add active touch states
        buttons.forEach(btn => {
            btn.addEventListener('touchstart', () => {
                btn.style.transform = 'scale(0.95)';
                btn.style.opacity = '0.9';
            });
            
            btn.addEventListener('touchend', () => {
                btn.style.transform = '';
                btn.style.opacity = '';
            });
        });
    }
    
    /**
     * Adjust popup height for small screens
     */
    function adjustPopupHeight() {
        const popup = document.querySelector('.enhanced-event-popup');
        if (!popup) return;
        
        const viewportHeight = window.innerHeight;
        const isLandscape = window.innerWidth > window.innerHeight;
        
        // Optimize layout based on orientation and screen size
        if (viewportHeight < 500) {
            if (isLandscape) {
                // In landscape on small devices, use horizontal layout
                popup.style.gridTemplateColumns = '1fr 1.5fr';
                popup.style.maxHeight = '95vh';
                popup.style.height = 'auto';
            } else {
                // In portrait on small devices, use vertical layout
                popup.style.gridTemplateColumns = '1fr';
                popup.style.maxHeight = 'none';
                popup.style.height = '95vh';
            }
        } else {
            // On larger screens, adapt based on width
            if (window.innerWidth <= 768) {
                popup.style.gridTemplateColumns = '1fr';
            } else {
                popup.style.gridTemplateColumns = '1fr 1.5fr';
            }
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
     * Handle orientation changes
     */
    function handleOrientationChanges() {
        window.addEventListener('orientationchange', function() {
            setTimeout(() => {
                optimizeForMobile();
            }, 300);
        });
    }
});

/**
 * Enhanced Events Popup Content Management
 * Ensures proper content display and handling on all devices
 */
document.addEventListener('DOMContentLoaded', function() {
    // Listen for popup activation
    document.addEventListener('click', function(e) {
        if (e.target.closest('.circular-event-card') || e.target.closest('.learn-more-btn')) {
            // Wait for popup to appear
            setTimeout(enhancePopupContent, 900);
        }
    });
    
    /**
     * Enhance popup content for better display
     */
    function enhancePopupContent() {
        const popup = document.querySelector('.enhanced-popup-overlay.active .enhanced-event-popup');
        if (!popup) return;
        
        // Check for content overflow and add visual cues
        checkContentOverflow();
        
        // Fix any layout issues from 3D transforms on mobile
        adjustForMobile();
        
        // Ensure card content is properly visible
        optimizeCards();
    }
    
    /**
     * Check for content overflow and add visual cues
     */
    function checkContentOverflow() {
        const description = document.querySelector('.popup-description');
        if (description && description.scrollHeight > description.clientHeight + 5) {
            description.classList.add('has-overflow');
            
            // Add scroll indicator if not already present
            if (!description.querySelector('.scroll-indicator')) {
                const indicator = document.createElement('div');
                indicator.className = 'scroll-indicator';
                indicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
                description.appendChild(indicator);
            }
        }
    }
    
    /**
     * Adjust for mobile devices
     */
    function adjustForMobile() {
        if (window.innerWidth <= 768) {
            // Remove any 3D transforms that might affect content
            const transformElements = document.querySelectorAll('.popup-category, .popup-title, .popup-description, .popup-meta-icon');
            transformElements.forEach(el => {
                if (el.style.transform) {
                    el.style.transform = el.style.transform.replace(/translateZ\([^)]+\)\s*/g, '');
                }
            });
            
            // Ensure popup height fits viewport
            const popup = document.querySelector('.enhanced-event-popup');
            if (popup) {
                const viewportHeight = window.innerHeight;
                if (popup.offsetHeight > viewportHeight * 0.95) {
                    popup.style.height = '95vh';
                    popup.style.overflow = 'auto';
                }
            }
        }
    }
    
    /**
     * Optimize cards for better display
     */
    function optimizeCards() {
        const cards = document.querySelectorAll('.event-card, .related-event-card');
        cards.forEach(card => {
            // Ensure title doesn't get cut off
            const title = card.querySelector('.event-card-title, .related-event-title');
            if (title && title.offsetWidth > 0) {
                if (title.scrollWidth > title.offsetWidth) {
                    title.title = title.textContent;
                }
            }
        });
    }
    
    // Add necessary styles
    const style = document.createElement('style');
    style.textContent = `
        .popup-description.has-overflow {
            position: relative;
        }
        
        .scroll-indicator {
            position: absolute;
            bottom: 2px;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(255,255,255,0.7);
            font-size: 12px;
            animation: bounce 1.5s infinite;
            pointer-events: none;
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(5px); }
        }
        
        @media (max-width: 768px) {
            .enhanced-event-popup {
                transform: none !important;
            }
            
            .sidebar-shape {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (document.querySelector('.enhanced-popup-overlay.active')) {
            enhancePopupContent();
        }
    });
});

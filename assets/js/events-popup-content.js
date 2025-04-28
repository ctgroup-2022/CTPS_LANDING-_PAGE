/**
 * Enhanced Events Popup Content Management
 * Ensures proper content display and handling
 */
document.addEventListener('DOMContentLoaded', function() {
    // Listen for popup activation
    document.addEventListener('click', function(e) {
        // Wait for popup to be active
        setTimeout(checkContentOverflow, 600);
    });
    
    // Function to check for content overflow and adjust
    function checkContentOverflow() {
        const popup = document.querySelector('.enhanced-popup-overlay.active .enhanced-event-popup');
        if (!popup) return;
        
        // Check description overflow
        const description = popup.querySelector('.popup-description');
        if (description && description.scrollHeight > description.clientHeight) {
            description.classList.add('has-overflow');
            // Add subtle indicator that content is scrollable
            if (!description.querySelector('.scroll-indicator')) {
                const indicator = document.createElement('div');
                indicator.className = 'scroll-indicator';
                indicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
                description.appendChild(indicator);
            }
        }
        
        // Ensure content area is scrollable when needed
        const contentArea = popup.querySelector('.enhanced-popup-content');
        if (contentArea) {
            if (contentArea.scrollHeight > contentArea.clientHeight) {
                contentArea.classList.add('is-scrollable');
            } else {
                contentArea.classList.remove('is-scrollable');
            }
        }
        
        // Handle very long titles
        const title = popup.querySelector('.popup-title');
        if (title && title.offsetHeight > 100) {
            title.style.fontSize = '1.8rem';
        }
        
        // Fix any 3D transform issues that might affect content display
        adjustTransforms();
    }
    
    // Function to adjust 3D transforms for better content display
    function adjustTransforms() {
        const popup = document.querySelector('.enhanced-popup-overlay.active .enhanced-event-popup');
        if (!popup) return;
        
        // Ensure content container doesn't have excessive transforms
        const content = popup.querySelector('.enhanced-popup-content');
        if (content) {
            // Reset any transform that might be interfering with content display
            content.style.transform = 'none';
        }
        
        // Make sure detail items aren't transformed in a way that cuts off content
        const detailItems = popup.querySelectorAll('.event-detail-item');
        detailItems.forEach(item => {
            const content = item.querySelector('.event-detail-content');
            if (content && content.scrollHeight > content.clientHeight) {
                item.classList.add('has-overflow');
            }
        });
    }
    
    // Additional style for the scroll indicator
    const style = document.createElement('style');
    style.textContent = `
        .popup-description.has-overflow {
            position: relative;
            padding-bottom: 20px;
        }
        
        .scroll-indicator {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(255,255,255,0.7);
            font-size: 12px;
            animation: bounce 1.5s infinite;
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(5px); }
        }
        
        .enhanced-popup-content.is-scrollable::after {
            opacity: 1;
        }
        
        .event-detail-item.has-overflow {
            height: auto !important;
            transform: none !important;
        }
    `;
    document.head.appendChild(style);
    
    // Check content when window is resized
    window.addEventListener('resize', function() {
        if (document.querySelector('.enhanced-popup-overlay.active')) {
            checkContentOverflow();
        }
    });
});

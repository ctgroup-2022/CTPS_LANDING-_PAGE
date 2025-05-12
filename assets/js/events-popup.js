/**
 * Events Section - Popup Functionality Disabled
 * This file previously handled popups for event cards
 */
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards without popups
    initEventCardAnimations();
    
    /**
     * Initialize hover animations for event cards without popup functionality
     */
    function initEventCardAnimations() {
        const eventCards = document.querySelectorAll('.circular-event-card');
        
        eventCards.forEach(card => {
            const circleElement = card.querySelector('.circle-bg');
            
            // Add hover effect to circle
            if (circleElement) {
                circleElement.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.03)';
                    this.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.2)';
                });
                
                circleElement.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                });
            }
            
            // Modify Learn More button to have a click effect without popup
            const learnMoreBtn = card.querySelector('.learn-more-btn');
            if (learnMoreBtn) {
                learnMoreBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Just animate button click without showing popup
                    animateButtonClick(this);
                    
                    // Optional: Navigate to a specific page instead of showing popup
                    // window.location.href = '/events.php'; // Uncomment to enable navigation
                });
            }
        });
    }
    
    /**
     * Button click animation
     */
    function animateButtonClick(button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 200);
    }
});

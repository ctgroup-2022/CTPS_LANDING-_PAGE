/**
 * Circular Events Card Initialization
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize 3D effects for circular cards
    initCircularEvents();
    
    // Function to initialize circular event cards
    function initCircularEvents() {
        const eventCards = document.querySelectorAll('.circular-event-card');
        
        // Remove old panel backdrop if it exists
        const oldBackdrop = document.querySelector('.panel-backdrop');
        if (oldBackdrop) {
            oldBackdrop.remove();
        }
        
        // Set up hover effects for each card
        eventCards.forEach(card => {
            // Add 3D hover effect
            card.addEventListener('mouseenter', function() {
                const circleElement = card.querySelector('.circle-bg');
                if (circleElement) {
                    circleElement.style.transform = 'translateY(-10px)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                const circleElement = card.querySelector('.circle-bg');
                if (circleElement) {
                    circleElement.style.transform = '';
                }
            });
            
            // Add click animation
            const learnMoreBtn = card.querySelector('.learn-more-btn');
            if (learnMoreBtn) {
                learnMoreBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    
                    const circleElement = card.querySelector('.circle-bg');
                    if (circleElement) {
                        circleElement.style.transition = 'transform 0.3s cubic-bezier(.34,1.56,.64,1)';
                        circleElement.style.transform = 'scale(1.08)';
                        setTimeout(() => {
                            circleElement.style.transform = '';
                        }, 300);
                    }
                });
            }
        });
    }
});

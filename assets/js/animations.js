/**
 * Enhanced Animation Effects for Events Section
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hover animations for event cards
    initEventCardAnimations();
    
    /**
     * Initialize hover animations for event cards
     */
    function initEventCardAnimations() {
        const eventCards = document.querySelectorAll('.circular-event-card');
        
        eventCards.forEach(card => {
            // Add 3D hover effect with mouse movement
            card.addEventListener('mousemove', function(e) {
                const circleElement = card.querySelector('.circle-bg');
                if (!circleElement) return;
                
                // Get position of mouse relative to the card
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate rotation
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Make the tilt effect subtle
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                // Apply the transform
                circleElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                
                // Add dynamic shadow
                circleElement.style.boxShadow = `
                    ${(x - centerX) / 15}px 
                    ${(y - centerY) / 15}px 
                    25px rgba(0, 0, 0, 0.15)
                `;
                
                // Move the icon for parallax effect
                const iconContainer = circleElement.querySelector('.icon-container');
                if (iconContainer) {
                    iconContainer.style.transform = `translateX(${(x - centerX) / 10}px) translateY(${(y - centerY) / 10}px)`;
                }
                
                // Move the title for parallax effect
                const title = circleElement.querySelector('.circle-title');
                if (title) {
                    title.style.transform = `translateX(${(x - centerX) / 15}px) translateY(${(y - centerY) / 15}px)`;
                }
            });
            
            // Reset transforms on mouse leave
            card.addEventListener('mouseleave', function() {
                const circleElement = card.querySelector('.circle-bg');
                if (!circleElement) return;
                
                // Reset all transforms with smooth transition
                circleElement.style.transform = '';
                circleElement.style.boxShadow = '';
                
                const iconContainer = circleElement.querySelector('.icon-container');
                if (iconContainer) {
                    iconContainer.style.transform = '';
                }
                
                const title = circleElement.querySelector('.circle-title');
                if (title) {
                    title.style.transform = '';
                }
            });
            
            // Add click animation
            card.addEventListener('click', function() {
                const circleElement = card.querySelector('.circle-bg');
                if (!circleElement) return;
                
                // Add pulse effect on click
                circleElement.classList.add('pulse-effect');
                
                // Remove the class after animation completes
                setTimeout(() => {
                    circleElement.classList.remove('pulse-effect');
                }, 700);
            });
        });
    }
    
    // Add pulse animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulseEffect {
            0% { transform: scale(1); box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1); }
            50% { transform: scale(1.05); box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15); }
            100% { transform: scale(1); box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1); }
        }
        
        .pulse-effect {
            animation: pulseEffect 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
    `;
    document.head.appendChild(style);
});

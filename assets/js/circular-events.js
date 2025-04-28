document.addEventListener('DOMContentLoaded', function() {
    // Set up event cards and panels
    initCircularEvents();
    
    // Add 3D effects to cards
    addEventCardEffects();
    
    // Generate background particles
    generateBackgroundParticles();
    
    // Function to initialize circular event cards
    function initCircularEvents() {
        const eventCards = document.querySelectorAll('.circular-event-card');
        
        // Create backdrop element for panels
        const backdrop = document.createElement('div');
        backdrop.className = 'panel-backdrop';
        document.body.appendChild(backdrop);
        
        // Set up click handlers for each card
        eventCards.forEach(card => {
            const learnMoreBtn = card.querySelector('.learn-more-btn');
            const detailsPanel = card.querySelector('.event-details-panel');
            const closeBtn = detailsPanel.querySelector('.close-panel');
            
            // Learn More button click
            learnMoreBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent card click
                
                // Close any open panels first
                document.querySelectorAll('.event-details-panel.active').forEach(panel => {
                    if (panel !== detailsPanel) {
                        panel.classList.remove('active');
                    }
                });
                
                // Open this panel
                detailsPanel.classList.add('active');
                backdrop.classList.add('active');
                
                // Animate items
                const items = detailsPanel.querySelectorAll('.event-item');
                items.forEach(item => {
                    item.classList.add('animated');
                });
                
                // Set panel background color based on card type
                if (card.id === 'event-latest') {
                    detailsPanel.style.borderTop = '4px solid var(--event-green)';
                } else if (card.id === 'event-notice') {
                    detailsPanel.style.borderTop = '4px solid var(--event-blue)';
                } else if (card.id === 'event-spotlight') {
                    detailsPanel.style.borderTop = '4px solid var(--event-purple)';
                } else if (card.id === 'event-activities') {
                    detailsPanel.style.borderTop = '4px solid var(--event-orange)';
                }
            });
            
            // Close button click
            closeBtn.addEventListener('click', function() {
                detailsPanel.classList.remove('active');
                backdrop.classList.remove('active');
                
                // Reset animation
                setTimeout(() => {
                    const items = detailsPanel.querySelectorAll('.event-item');
                    items.forEach(item => {
                        item.classList.remove('animated');
                    });
                }, 300);
            });
        });
        
        // Close panel when clicking on backdrop
        backdrop.addEventListener('click', function() {
            document.querySelectorAll('.event-details-panel.active').forEach(panel => {
                panel.classList.remove('active');
            });
            backdrop.classList.remove('active');
            
            // Reset animation for all items
            setTimeout(() => {
                document.querySelectorAll('.event-item').forEach(item => {
                    item.classList.remove('animated');
                });
            }, 300);
        });
        
        // Close panels with escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                document.querySelectorAll('.event-details-panel.active').forEach(panel => {
                    panel.classList.remove('active');
                });
                backdrop.classList.remove('active');
            }
        });
    }
    
    // Add 3D hover effects to circular cards
    function addEventCardEffects() {
        const cards = document.querySelectorAll('.circular-event-card');
        
        cards.forEach(card => {
            const circle = card.querySelector('.circle-bg');
            
            // 3D effect on mouse move
            card.addEventListener('mousemove', function(e) {
                const rect = circle.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate rotation values based on mouse position
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = ((x - centerX) / centerX) * 10;
                const rotateX = -((y - centerY) / centerY) * 10;
                
                // Apply transform to create 3D effect
                circle.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });
            
            // Reset on mouse leave
            card.addEventListener('mouseleave', function() {
                circle.style.transform = 'translateY(0)';
                setTimeout(() => {
                    circle.style.transform = '';
                }, 300);
            });
        });
    }
    
    // Generate background particles for visual interest
    function generateBackgroundParticles() {
        const particlesContainer = document.querySelector('.particles-container');
        if (!particlesContainer) return;
        
        // Create particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size
            const size = Math.floor(Math.random() * 6) + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random color based on event card colors
            const colors = ['#8bc34a', '#00bcd4', '#673ab7', '#ff5722'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            // Random opacity
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            // Animation duration and delay
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 10;
            particle.style.animation = `floatParticle ${duration}s infinite ease-in-out ${delay}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
});

// Add keyframe animation for particles
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(30px, -30px); }
            50% { transform: translate(50px, 0); }
            75% { transform: translate(20px, 20px); }
        }
    `;
    document.head.appendChild(style);
});

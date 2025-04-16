document.addEventListener('DOMContentLoaded', function() {
    // Counter animation
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200; // Lower is faster
    
    // Create particles
    createParticles();
    
    // Initialize Intersection Observer to trigger counter when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start animations when section is in view
                setTimeout(() => {
                    startCounters();
                }, 400);
                
                // Unobserve after triggering
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    // Observe the counter section
    const counterSection = document.querySelector('.counter-section');
    if (counterSection) {
        observer.observe(counterSection);
    }
    
    // Function to start counters
    function startCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            let count = 0;
            
            const updateCounter = () => {
                const increment = target / speed;
                
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCounter, 1);
                } else {
                    counter.innerText = target;
                    
                    // Add bounce effect after counting completes
                    counter.classList.add('counted');
                    counter.style.animation = 'pulse 1s 1';
                    
                    setTimeout(() => {
                        counter.style.animation = '';
                    }, 1000);
                }
            };
            
            updateCounter();
        });
    }
    
    // Function to create particle effects
    function createParticles() {
        const counterSection = document.querySelector('.counter-section');
        
        if (!counterSection) return;
        
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'counter-particles';
        counterSection.appendChild(particlesContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 6 + 2;
            
            // Random opacity
            const opacity = Math.random() * 0.3 + 0.1;
            
            // Random animation duration
            const duration = Math.random() * 30 + 10;
            const delay = Math.random() * 5;
            
            // Set styles
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.opacity = opacity;
            particle.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Make counter items hover effect more interactive
    const counterItems = document.querySelectorAll('.counter-item');
    
    counterItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.counter-icon');
            icon.style.transform = 'scale(1.2)';
            
            setTimeout(() => {
                icon.style.transform = '';
            }, 300);
        });
    });
});
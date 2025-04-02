document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer for counter animation
    const counterSection = document.querySelector('.counter-section');
    
    if (counterSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(counterSection);
    }
    
    // Function to animate counters
    function animateCounters() {
        const counters = document.querySelectorAll('.counter-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2500; // Animation duration in ms
            const increment = Math.ceil(target / (duration / 16)); // 16ms is approx one frame at 60fps
            
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = current.toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                    
                    // Add "+" if target is 100 or more
                    if (target >= 100) {
                        counter.textContent += '+';
                    }
                    
                    // Add animation class
                    counter.classList.add('completed');
                }
            };
            
            updateCounter();
        });
    }
    
    // Add parallax effect
    window.addEventListener('scroll', function() {
        if (counterSection) {
            const offset = window.pageYOffset;
            counterSection.style.backgroundPositionY = offset * 0.5 + 'px';
        }
    });
});
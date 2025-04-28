document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer to start counters when they come into view
    const counterElements = document.querySelectorAll('.counter-number');
    
    if (counterElements.length > 0) {
        const options = {
            threshold: 0.5,
            rootMargin: "0px"
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counterElement = entry.target;
                    const targetValue = parseInt(counterElement.getAttribute('data-count'));
                    const duration = 2000; // Animation duration in milliseconds
                    
                    animateCounter(counterElement, 0, targetValue, duration);
                    
                    // Unobserve after animation is triggered
                    observer.unobserve(counterElement);
                }
            });
        }, options);
        
        counterElements.forEach(counter => {
            observer.observe(counter);
        });
    }
    
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentCount = Math.floor(progress * (end - start) + start);
            element.innerText = currentCount;
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.innerText = end;
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Add hover effects to counter items
    const counterItems = document.querySelectorAll('.counter-item');
    counterItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
        
        // Add staggered animation on page load
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});
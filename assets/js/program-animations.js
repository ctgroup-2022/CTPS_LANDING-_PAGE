document.addEventListener('DOMContentLoaded', function() {
    // Add IntersectionObserver to trigger animations when section is in view
    const programsContainer = document.querySelector('.programs-container');
    
    if (programsContainer && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    
                    // Add dynamic color effects
                    setTimeout(() => {
                        const hexagons = entry.target.querySelectorAll('.hexagon-item');
                        hexagons.forEach(hex => {
                            const color = hex.getAttribute('data-color');
                            hex.style.setProperty('--hex-glow-color', getComputedStyle(document.documentElement)
                                .getPropertyValue(`--${color}`) || 'var(--primary)');
                        });
                    }, 500);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(programsContainer);
    }
    
    // Add parallax mouse effect to hexagons
    const programsSection = document.querySelector('.programs-container');
    if (programsSection) {
        programsSection.addEventListener('mousemove', e => {
            const { left, top, width, height } = programsSection.getBoundingClientRect();
            const x = ((e.clientX - left) / width - 0.5) * 2;
            const y = ((e.clientY - top) / height - 0.5) * 2;
            
            document.querySelectorAll('.hexagon-item').forEach(hex => {
                const depth = parseFloat(hex.getAttribute('data-depth') || 1);
                const moveX = x * 10 * depth;
                const moveY = y * 10 * depth;
                hex.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });
        });
        
        programsSection.addEventListener('mouseleave', () => {
            document.querySelectorAll('.hexagon-item').forEach(hex => {
                hex.style.transform = 'translate3d(0, 0, 0)';
            });
        });
    }
});

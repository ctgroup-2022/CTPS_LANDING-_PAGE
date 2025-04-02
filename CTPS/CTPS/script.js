// Theme switcher - Only initialize if element exists
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        document.documentElement.setAttribute('data-theme', 
            themeToggle.checked ? 'dark' : 'light');
    });
}

// Current date - Only initialize if element exists
const currentDateElement = document.getElementById('currentDate');
if (currentDateElement) {
    currentDateElement.textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize smooth animations for cards
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '20px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

    // Add parallax effect to cards
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(20px)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Initialize sliders
    document.querySelectorAll('.slider').forEach(slider => {
        const slides = Array.from(slider.querySelectorAll('.slide'));
        let currentIndex = 0;

        // Show first slide immediately
        if (slides.length > 0) {
            slides[0].classList.add('active');
        }

        // Create dots
        const dots = slider.parentElement.querySelector('.dots');
        if (dots && slides.length > 1) {
            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.className = `dot ${index === 0 ? 'active' : ''}`;
                dot.onclick = () => showSlide(index);
                dots.appendChild(dot);
            });
        }

        function showSlide(index) {
            slides[currentIndex].style.transform = 'translateY(100%)';
            slides[currentIndex].style.opacity = '0';
            setTimeout(() => {
                slides[currentIndex].classList.remove('active');
                slides[currentIndex].style.transform = 'translateY(-100%)';
                
                currentIndex = index;
                slides[currentIndex].classList.add('active');
                
                // Update dots
                if (dots) {
                    Array.from(dots.children).forEach((dot, i) => {
                        dot.classList.toggle('active', i === index);
                    });
                }
            }, 300);
        }

        // Auto-advance only if multiple slides
        if (slides.length > 1) {
            setInterval(() => {
                showSlide((currentIndex + 1) % slides.length);
            }, 3000);
        }
    });
});

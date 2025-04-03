

// Create floating particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.opacity = Math.random() * 0.3;
    particle.style.width = `${Math.random() * 5 + 3}px`;
    particle.style.height = particle.style.width;
    
    // Add animation
    particle.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    particlesContainer.appendChild(particle);
}

// 3D perspective effect on hover
const imageContainer = document.getElementById('imageContainer');
imageContainer.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = imageContainer.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    imageContainer.style.transform = `
        perspective(1000px)
        rotateY(${x * 10}deg)
        rotateX(${-y * 10}deg)
        translateZ(10px)
    `;
});

imageContainer.addEventListener('mouseleave', () => {
    imageContainer.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
});

// Mascot animation on scroll
const mascot = document.getElementById('mascot');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (mascot) {
        mascot.style.transform = `translateY(${scrollPosition * 0.05}px)`;
    }
});

// Feature cards hover effect
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        featureCards.forEach(c => {
            if (c !== this) {
                c.style.transform = 'scale(0.95)';
                c.style.opacity = '0.7';
            }
        });
    });
    
    card.addEventListener('mouseleave', function() {
        featureCards.forEach(c => {
            c.style.transform = '';
            c.style.opacity = '1';
        });
    });
});

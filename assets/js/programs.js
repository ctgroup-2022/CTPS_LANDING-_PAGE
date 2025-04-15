
document.addEventListener('DOMContentLoaded', () => {
  // Add hover effects with JavaScript
  const bentoItems = document.querySelectorAll('.bento-item');
  
  bentoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      if (!item.classList.contains('center-circle')) {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = `0 10px 30px rgba(30, 136, 229, 0.3)`;
        item.style.background = `linear-gradient(135deg, var(--primary-light) 0%, #fff 100%)`;
      }
    });
    
    item.addEventListener('mouseleave', () => {
      if (!item.classList.contains('center-circle')) {
        item.style.transform = '';
        item.style.boxShadow = '';
        item.style.background = '';
      }
    });
    
    // Add click effect
    item.addEventListener('click', () => {
      if (!item.classList.contains('center-circle')) {
        item.style.transform = 'scale(0.98)';
        setTimeout(() => {
          item.style.transform = '';
        }, 150);
      }
    });
  });

  // Create particles dynamically
  const createParticles = () => {
    const circleAnimation = document.querySelector('.circle-animation');
    
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      const angle = Math.random() * Math.PI * 2;
      const radius = 70 + Math.random() * 30;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      particle.style.left = `calc(50% + ${x}px)`;
      particle.style.top = `calc(50% + ${y}px)`;
      
      // Random size
      const size = 3 + Math.random() * 7;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random color
      const colors = ['#5833EF', '#B033EF', '#FF5E3A', '#FFB156'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = color;
      particle.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
      
      // Random animation
      const duration = 5 + Math.random() * 10;
      particle.style.animation = `float ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * -10}s`;

      // Add particle to circle animation
      circleAnimation.appendChild(particle);
    }
  };

  // Initialize particles
  createParticles();
});

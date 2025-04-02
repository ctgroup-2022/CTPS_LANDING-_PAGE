document.addEventListener('DOMContentLoaded', function() {
    // Background slider functionality
    const slides = document.querySelectorAll('.bg-slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Floating icons animation
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach(icon => {
        // Random initial position
        const randomX = Math.random() * 20 - 10; // -10 to 10
        const randomY = Math.random() * 20 - 10; // -10 to 10
        
        // Apply animation with random values
        icon.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite`;
        icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });

    // Form submission
    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your application! We will contact you shortly.');
            this.reset();
        });
    }
});
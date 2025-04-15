// <!-- Add Vanilla Tilt for 3D Card Effects -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js"></script>
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });
    
    // Initialize vanilla tilt for 3D stat boxes
    VanillaTilt.init(document.querySelectorAll(".stat-3d-box"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.3
    });
    
    // Initialize vanilla tilt for campus items
    VanillaTilt.init(document.querySelectorAll(".campus-item"), {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });
    
    // Testimonial carousel functionality
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentIndex = 0;
    
    // Set first testimonial as active
    testimonials[0].classList.add('active');
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }
    
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }
    
    // Add event listeners for controls
    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);
    
    // Add event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showTestimonial(currentIndex);
        });
    });
    
    // Auto-rotate testimonials
    setInterval(nextTestimonial, 6000);
});

    document.addEventListener('DOMContentLoaded', function() {
        // Set animation delay for cards
        const cards = document.querySelectorAll('.testimonial-card1');
        cards.forEach((card, index) => {
            card.style.setProperty('--card-index', index);
        });
        
        // Update pagination dots to match slide count
        updatePaginationDots();
        
        // Initialize slider
        initSlider();
        
        // Truncate long testimonials
        truncateTestimonials();
    });
    
    function updatePaginationDots() {
        const slideCount = document.querySelectorAll('.slide1').length;
        const dotsContainer = document.querySelector('.pagination-dots');
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < slideCount; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    function initSlider() {
        // Your slider initialization code here
    }
    
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide1');
    
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(index) {
        const slider = document.querySelector('.slider1');
        currentSlide = index;
        
        let slideWidth;
        if (window.innerWidth <= 480) {
            slideWidth = 100; // 100% for mobile
        } else if (window.innerWidth <= 992) {
            slideWidth = 50; // 50% for tablets
        } else {
            slideWidth = 33.333; // 33.333% for desktops
        }
        
        slider.style.transform = `translateX(-${index * slideWidth}%)`;
        updateDots();
    }
    
    function nextSlide() {
        const totalSlides = slides.length;
        const visibleSlides = window.innerWidth <= 480 ? 1 : (window.innerWidth <= 992 ? 2 : 3);
        const maxIndex = totalSlides - visibleSlides;
        
        currentSlide = currentSlide >= maxIndex ? 0 : currentSlide + 1;
        goToSlide(currentSlide);
    }
    
    function prevSlide() {
        const totalSlides = slides.length;
        const visibleSlides = window.innerWidth <= 480 ? 1 : (window.innerWidth <= 992 ? 2 : 3);
        const maxIndex = totalSlides - visibleSlides;
        
        currentSlide = currentSlide <= 0 ? maxIndex : currentSlide - 1;
        goToSlide(currentSlide);
    }
    
    window.addEventListener('resize', () => {
        goToSlide(currentSlide);
    });
    
    // Add function to truncate long testimonials
    function truncateTestimonials() {
        const testimonialParagraphs = document.querySelectorAll('.quote-box1 p:not(:first-of-type)');
        testimonialParagraphs.forEach(p => {
            let text = p.textContent;
            if (text.length > 60) {
                p.textContent = text.substring(0, 60).trim() + '...';
            }
        });
    }

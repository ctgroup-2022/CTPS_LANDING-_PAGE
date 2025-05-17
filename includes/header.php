<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap" rel="stylesheet">

<header class="header">
        <div class="logo">
            <img src="assets\Logo\ctpslogo.png" alt="image">
        </div>
        
        <nav class="nav-container">
            <div class="nav-links">
                <a href="#hero-section" class="nav-link">Home</a>
                <a href="#about" class="nav-link">About Us</a>
                <a href="#gallery" class="nav-link">Gallery</a>
                <a href="#events-slider" class="nav-link">Activities</a>
                <a href="#testimonial" class="nav-link">Testimonials</a>
                <a href="#faq" class="nav-link">FAQ</a>
            </div>
            <!-- Single Apply button that works for both desktop and mobile -->
            <button class="apply-btn"><i class="fas fa-paper-plane"></i>VIRTUAL TOUR</button>
        </nav>

        <!-- Remove extra apply buttons -->
        <!-- Keep the hamburger button -->
        <button class="hamburger" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Get all navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Add click event listener to each link
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the target section ID from the href attribute
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Close mobile menu if open
                    const navContainer = document.querySelector('.nav-container');
                    const hamburger = document.querySelector('.hamburger');
                    if (navContainer.classList.contains('active')) {
                        navContainer.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                    
                    // Scroll to the target section smoothly
                    window.scrollTo({
                        top: targetSection.offsetTop - 80, // Offset to account for fixed header
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add lazy loading for gallery and testimonial images
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize lazy loading for Gallery section
            const gallerySection = document.querySelector('#gallery');
            if (gallerySection) {
                const galleryImages = gallerySection.querySelectorAll('.facility-image img');
                galleryImages.forEach(img => {
                    if (!img.hasAttribute('loading')) {
                        img.setAttribute('loading', 'lazy');
                    }
                });
            }
            
            // Initialize lazy loading for Testimonial section
            const testimonialSection = document.querySelector('#testimonial');
            if (testimonialSection) {
                const testimonialImages = testimonialSection.querySelectorAll('.testimonial-img img, .testimonial-author-img');
                testimonialImages.forEach(img => {
                    if (!img.hasAttribute('loading')) {
                        img.setAttribute('loading', 'lazy');
                    }
                });
            }
            
            // Use IntersectionObserver for more advanced lazy loading if supported
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            // If there's a data-src attribute, load the image from there
                            if (img.dataset.src) {
                                img.src = img.dataset.src;
                                img.removeAttribute('data-src');
                            }
                            observer.unobserve(img);
                        }
                    });
                }, { rootMargin: '0px 0px 200px 0px' }); // Start loading 200px before image comes into view
                
                // Apply to gallery images
                if (gallerySection) {
                    const lazyImages = gallerySection.querySelectorAll('.facility-image img:not([loading="lazy"])');
                    lazyImages.forEach(img => {
                        // Replace src with data-src for non-visible images
                        const src = img.getAttribute('src');
                        img.setAttribute('data-src', src);
                        img.setAttribute('src', 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E');
                        imageObserver.observe(img);
                    });
                }
                
                // Apply to testimonial images
                if (testimonialSection) {
                    const lazyTestimonialImages = testimonialSection.querySelectorAll('.testimonial-img img:not([loading="lazy"]), .testimonial-author-img:not([loading="lazy"])');
                    lazyTestimonialImages.forEach(img => {
                        const src = img.getAttribute('src');
                        img.setAttribute('data-src', src);
                        img.setAttribute('src', 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E');
                        imageObserver.observe(img);
                    });
                }
            }
        });

        // Add click event for Virtual Tour button
        const virtualTourBtn = document.querySelector('.apply-btn');
        if (virtualTourBtn) {
            virtualTourBtn.addEventListener('click', function() {
                const virtualTourSection = document.querySelector('#virtual-tour');
                if (virtualTourSection) {
                    // Close mobile menu if open
                    const navContainer = document.querySelector('.nav-container');
                    const hamburger = document.querySelector('.hamburger');
                    if (navContainer.classList.contains('active')) {
                        navContainer.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                    
                    // Scroll to the virtual tour section
                    window.scrollTo({
                        top: virtualTourSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
</script>
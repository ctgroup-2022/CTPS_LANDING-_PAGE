document.addEventListener('DOMContentLoaded', function() {
    // Background Slider
    const slides = document.querySelectorAll('.pg-slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Initialize first slide
    slides[0].classList.add('active');
    
    // Auto slide change
    setInterval(nextSlide, 7000);

    // Enhanced particles system
    const particles = document.querySelector('.pg-particles');
    
    function createParticles() {
        if (!particles) return;
        
        const particleCount = window.innerWidth > 768 ? 100 : 50;
        particles.innerHTML = '';
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // More varied particle sizes
            const size = Math.random() * 5 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random opacity
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            // Varied animation parameters
            const duration = Math.random() * 30 + 10;
            const delay = Math.random() * 5;
            
            particle.style.animation = `floatParticle ${duration}s infinite ease-in-out`;
            particle.style.animationDelay = `${delay}s`;
            
            // Add data attributes for interactive movement
            particle.dataset.speedX = Math.random() * 0.2 - 0.1;
            particle.dataset.speedY = Math.random() * 0.2 - 0.1;
            particle.dataset.initX = particle.style.left;
            particle.dataset.initY = particle.style.top;
            
            particles.appendChild(particle);
        }
        
        // Add enhanced particle styles
        if (!document.getElementById('particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                .particle {
                    position: absolute;
                    background-color: rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    pointer-events: none;
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
                    z-index: 3;
                    will-change: transform;
                }
                
                @keyframes floatParticle {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(30px, -30px) scale(1.2); }
                    50% { transform: translate(10px, -80px) scale(0.8); }
                    75% { transform: translate(-30px, -20px) scale(1.1); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    createParticles();
    window.addEventListener('resize', createParticles);
    
    // Interactive particle and floating elements movement
    const heroSection = document.querySelector('.pg-hero-section');
    const floatingElements = document.querySelectorAll('.floating-element');
    
    if (heroSection) {
        heroSection.addEventListener('mousemove', function(e) {
            if (window.innerWidth < 768) return;
            
            // Calculate mouse position relative to container
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Convert to percentage
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            // Move particles relative to mouse position
            document.querySelectorAll('.particle').forEach(particle => {
                const speedX = parseFloat(particle.dataset.speedX) * 100;
                const speedY = parseFloat(particle.dataset.speedY) * 100;
                
                const moveX = (xPercent - 0.5) * speedX;
                const moveY = (yPercent - 0.5) * speedY;
                
                particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
            
            // Move floating elements with parallax effect
            floatingElements.forEach((el, index) => {
                const factor = (index + 1) * 20;
                const moveX = (xPercent - 0.5) * factor;
                const moveY = (yPercent - 0.5) * factor;
                
                el.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${el.dataset.rotation || '0deg'})`;
            });
            
            // Move morphing background elements
            document.querySelectorAll('.morph-shape').forEach((shape, index) => {
                const factor = (index + 1) * 10;
                const moveX = (xPercent - 0.5) * factor;
                const moveY = (yPercent - 0.5) * factor;
                
                shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
        
        // Reset transforms when mouse leaves
        heroSection.addEventListener('mouseleave', function() {
            document.querySelectorAll('.particle').forEach(particle => {
                particle.style.transform = '';
            });
            
            floatingElements.forEach(el => {
                el.style.transform = '';
            });
            
            document.querySelectorAll('.morph-shape').forEach(shape => {
                shape.style.transform = '';
            });
        });
    }
    
    // Create ribbon animation
    const ribbonSegments = document.querySelectorAll('.ribbon-segment');
    ribbonSegments.forEach((segment, index) => {
        // Set initial rotation
        const rotation = (index % 2 === 0) ? '2deg' : '-2deg';
        segment.style.transform = `rotate(${rotation})`;
    });
    
    // Initialize text reveal animations
    const revealLines = document.querySelectorAll('.reveal-line span');
    revealLines.forEach(line => {
        line.setAttribute('data-text', line.textContent.trim());
    });
    
    // Add gradient text data attribute
    const gradientText = document.querySelector('.gradient-text');
    if (gradientText) {
        gradientText.setAttribute('data-text', gradientText.textContent.trim());
    }
    
    // Smooth scrolling for the scroll indicator
    const scrollIndicator = document.querySelector('.pg-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const gallerySection = document.getElementById('gallery');
            if (gallerySection) {
                window.scrollTo({
                    top: gallerySection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Lightbox Functionality
    const lightbox = document.querySelector('.pg-lightbox');
    const lightboxImg = document.querySelector('.pg-lightbox-img');
    const lightboxClose = document.querySelector('.pg-lightbox-close');
    const viewBtns = document.querySelectorAll('.pg-view-btn');

    viewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Prevent the card flip when clicking the button
            e.stopPropagation();
            e.preventDefault();
            
            const imgSrc = this.getAttribute('data-image');
            
            // Preload image before showing lightbox for better UX
            const img = new Image();
            img.onload = function() {
                lightboxImg.src = imgSrc;
                lightbox.classList.add('show');
                document.body.style.overflow = 'hidden';
            };
            img.src = imgSrc;
        });
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for animation on scroll
    const observeElements = document.querySelectorAll('.pg-bento-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0) scale(1)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    observeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(50px) scale(0.95)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Enhanced Gallery Interactions
    const galleryItems = document.querySelectorAll('.curtain-card');
    
    galleryItems.forEach(item => {
        // Optimize animations with lazy loading
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(item);
        
        // Add parallax effect to images for extra depth
        item.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            
            // Calculate percentage positions
            const xPercent = (x / cardRect.width) * 100;
            const yPercent = (y / cardRect.height) * 100;
            
            // Move image slightly based on cursor position for parallax effect
            const img = this.querySelector('img');
            if (img && window.matchMedia('(min-width: 768px)').matches) {
                img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                // Only apply subtle movement to avoid performance issues
                img.style.transform = `scale(1.15) translate(${(xPercent - 50) / 20}px, ${(yPercent - 50) / 20}px)`;
            }
        });
        
        // Reset parallax on mouse leave
        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transformOrigin = 'center center';
                img.style.transform = '';
            }
        });
    });
    
    // Optimize performance by using requestAnimationFrame for smooth animations
    let ticking = false;
    document.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                // Check if gallery items are in viewport and apply animations
                animateGalleryItems();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    function animateGalleryItems() {
        const galleryItems = document.querySelectorAll('.pg-bento-item:not(.in-view)');
        galleryItems.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            const isInViewport = itemRect.top <= window.innerHeight * 0.9;
            
            if (isInViewport) {
                item.classList.add('in-view');
                item.style.opacity = 1;
                item.style.transform = 'translateY(0) scale(1)';
            }
        });
    }
    
    // Initialize animations on first load
    animateGalleryItems();

    // Enhanced gallery interactions for Bento grid
    // Initialize AOS library for scroll animations if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true
        });
    }
    
    galleryItems.forEach(item => {
        // Add parallax effect to images for extra depth
        item.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const x = e.clientX - cardRect.left;
            const y = e.clientY - cardRect.top;
            
            // Calculate percentage positions
            const xPercent = (x / cardRect.width) * 100;
            const yPercent = (y / cardRect.height) * 100;
            
            // Move image slightly based on cursor position for parallax effect
            const img = this.querySelector('img');
            if (img && window.matchMedia('(min-width: 768px)').matches) {
                img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                img.style.transform = `scale(1.1) translate(${(xPercent - 50) / 20}px, ${(yPercent - 50) / 20}px)`;
            }
            
            // Subtle movement for caption
            const caption = this.querySelector('.pg-bento-caption');
            if (caption) {
                caption.style.transform = `translateY(${(yPercent - 50) / 15}px)`;
            }
        });
        
        // Reset parallax on mouse leave
        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            const caption = this.querySelector('.pg-bento-caption');
            
            if (img) {
                img.style.transformOrigin = 'center center';
                img.style.transform = '';
            }
            
            if (caption) {
                caption.style.transform = '';
            }
        });
    });
    
    // Lightbox functionality for gallery images
    if (viewBtns.length > 0 && lightbox && lightboxImg) {
        viewBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const imgSrc = this.getAttribute('data-image');
                
                // Preload image for better UX
                const img = new Image();
                img.onload = function() {
                    lightboxImg.src = imgSrc;
                    lightbox.classList.add('show');
                    document.body.style.overflow = 'hidden';
                };
                img.src = imgSrc;
            });
        });
        
        // Close lightbox
        if (lightboxClose) {
            lightboxClose.addEventListener('click', function() {
                lightbox.classList.remove('show');
                document.body.style.overflow = '';
            });
        }
        
        // Close on background click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('show')) {
                lightbox.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
});

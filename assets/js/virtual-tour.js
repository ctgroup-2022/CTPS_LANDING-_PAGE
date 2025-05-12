document.addEventListener('DOMContentLoaded', function() {
    // Initialize the virtual tour functionality
    initVirtualTour();
    
    // Apply 3D hover effects to navigation buttons
    init3DHoverEffects();
    
    // Initialize panorama effect
    initPanoramaEffect();
    
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true
        });
    }
});

/**
 * Initialize the virtual tour functionality
 */
function initVirtualTour() {
    const navButtons = document.querySelectorAll('.tour-nav-btn');
    const scenes = document.querySelectorAll('.tour-scene');
    const prevBtn = document.querySelector('.prev-scene');
    const nextBtn = document.querySelector('.next-scene');
    const currentIndicator = document.querySelector('.current-indicator');
    const totalIndicator = document.querySelector('.total-indicator');
    const hotspots = document.querySelectorAll('.hotspot');
    
    let currentIndex = 0;
    const totalScenes = scenes.length;
    
    // Set total indicator
    if (totalIndicator) {
        totalIndicator.textContent = totalScenes;
    }
    
    // Handle navigation button clicks
    navButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            // Update active button
            navButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Get target scene
            const targetId = this.getAttribute('data-target');
            const targetScene = document.getElementById(targetId);
            
            if (targetScene) {
                // Hide all scenes
                scenes.forEach(scene => scene.classList.remove('active'));
                
                // Show target scene
                targetScene.classList.add('active');
                
                // Update current index
                currentIndex = index;
                updateIndicator();
                
                // Add entrance animation
                animateSceneEntrance(targetScene);
            }
        });
    });
    
    // Handle previous button click
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + totalScenes) % totalScenes;
            navButtons[currentIndex].click();
        });
    }
    
    // Handle next button click
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % totalScenes;
            navButtons[currentIndex].click();
        });
    }
    
    // Handle hotspot clicks
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetIndex = Array.from(navButtons).findIndex(btn => 
                btn.getAttribute('data-target') === targetId
            );
            
            if (targetIndex !== -1) {
                currentIndex = targetIndex;
                navButtons[currentIndex].click();
            }
        });
    });
    
    // Update indicator function
    function updateIndicator() {
        if (currentIndicator) {
            currentIndicator.textContent = currentIndex + 1;
        }
    }
    
    // Initial setup
    updateIndicator();
}

/**
 * Initialize 3D hover effects for navigation buttons
 */
function init3DHoverEffects() {
    const navButtons = document.querySelectorAll('.tour-nav-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation angles based on cursor position
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            // Apply 3D transform
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            
            // Move icon for parallax effect
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = `translateZ(20px) translateX(${(x - centerX) / 20}px) translateY(${(y - centerY) / 20}px)`;
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
}

/**
 * Initialize panorama effect for scene images
 */
function initPanoramaEffect() {
    const panoramaViews = document.querySelectorAll('.panorama-placeholder');
    
    panoramaViews.forEach(view => {
        let isDragging = false;
        let startPosition = 0;
        let currentTranslate = 0;
        
        view.addEventListener('mousedown', startDrag);
        view.addEventListener('touchstart', startDrag);
        view.addEventListener('mousemove', drag);
        view.addEventListener('touchmove', drag);
        view.addEventListener('mouseup', endDrag);
        view.addEventListener('touchend', endDrag);
        view.addEventListener('mouseleave', endDrag);
        
        function startDrag(e) {
            isDragging = true;
            startPosition = getPositionX(e);
            view.style.cursor = 'grabbing';
        }
        
        function drag(e) {
            if (!isDragging) return;
            
            const currentPosition = getPositionX(e);
            const diff = currentPosition - startPosition;
            
            // Adjust the movement speed
            const img = view.querySelector('img');
            if (img) {
                currentTranslate += diff / 10;
                // Limit the panorama movement
                currentTranslate = Math.max(Math.min(currentTranslate, 50), -50);
                img.style.transform = `translateX(${currentTranslate}px)`;
            }
            
            startPosition = currentPosition;
        }
        
        function endDrag() {
            isDragging = false;
            view.style.cursor = 'grab';
        }
        
        function getPositionX(e) {
            return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        }
    });
}

/**
 * Animate scene entrance with a subtle fade-in effect
 */
function animateSceneEntrance(scene) {
    scene.style.opacity = '0';
    scene.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        scene.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        scene.style.opacity = '1';
        scene.style.transform = 'translateY(0)';
        
        // Reset transition after animation completes
        setTimeout(() => {
            scene.style.transition = '';
        }, 500);
    }, 50);
}

/**
 * Initialize image preloading to improve user experience
 */
function preloadImages() {
    const images = document.querySelectorAll('.panorama-view');
    
    images.forEach(image => {
        const src = image.getAttribute('data-image');
        if (src) {
            const img = new Image();
            img.src = src;
        }
    });
}

// Call preloadImages to start loading images in the background
preloadImages();

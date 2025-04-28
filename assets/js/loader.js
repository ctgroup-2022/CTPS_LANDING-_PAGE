document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const loadingBar = document.querySelector('.loading-bar');
    
    if (!preloader || !loadingBar) return;
    
    // Initialize loader text animation
    const loaderText = document.querySelector('.loader-text');
    if (loaderText) {
        const text = loaderText.textContent;
        loaderText.innerHTML = '';
        
        // Create individual spans for each letter
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
            loaderText.appendChild(span);
        }
    }
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Hide preloader after a small delay
            setTimeout(() => {
                preloader.classList.add('hidden');
                
                // Remove preloader from DOM after transition completes
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            }, 500);
        }
        
        // Update loading bar
        loadingBar.style.width = `${progress}%`;
    }, 200);
    
    // Create 3D effect for logo on mouse move
    const logoContainer = document.querySelector('.school-logo-container');
    const logo = document.querySelector('.school-logo');
    
    if (logoContainer && logo) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            logoContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    }
    
    // Fallback: Ensure preloader is removed even if something goes wrong
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader && !preloader.classList.contains('hidden')) {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            }
        }, 3000);
    });
});

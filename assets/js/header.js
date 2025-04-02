document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');
    
    // Toggle navigation when hamburger is clicked
    hamburger.addEventListener('click', function() {
        navContainer.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navContainer.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navContainer.contains(event.target) && !hamburger.contains(event.target)) {
            navContainer.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});
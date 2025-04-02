// JavaScript for About Section Animations and Interactions

document.addEventListener("DOMContentLoaded", () => {
    // Floating elements animation
    const floatingElements = document.querySelectorAll(".floating-element");

    floatingElements.forEach((element) => {
        // Add hover effect
        element.addEventListener("mouseover", () => {
            element.style.transform = "scale(1.2)";
        });

        element.addEventListener("mouseout", () => {
            element.style.transform = "scale(1)";
        });
    });

    // Rotating border animation
    const rotatingBorder = document.querySelector(".image-border");
    if (rotatingBorder) {
        rotatingBorder.style.animationPlayState = "running";
    }

    // Scroll reveal for About Section
    const aboutSection = document.querySelector(".about-section");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutSection.classList.add("visible");
                }
            });
        },
        { threshold: 0.5 }
    );

    if (aboutSection) {
        observer.observe(aboutSection);
    }

    // Add fade-in animation to section elements
    const fadeElements = document.querySelectorAll('.main-title, .subtitle, .description, .feature-pill');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease-out';
        fadeObserver.observe(el);
    });

    // Add responsive form handling
    const form = document.getElementById('application-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Form submitted successfully!');
        });
    }

    // Add parallax effect
    document.addEventListener('mousemove', function (e) {
        const aboutSection = document.querySelector('.about-section');
        if (!aboutSection) return;

        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const decorations = document.querySelectorAll('.decoration');
        decorations.forEach((decoration, index) => {
            const depth = (index + 1) * 10;
            const moveX = (mouseX - 0.5) * depth;
            const moveY = (mouseY - 0.5) * depth;
            decoration.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        // Move floating elements in opposite direction for dynamic effect
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const depth = (index + 1) * -5;
            const moveX = (mouseX - 0.5) * depth;
            const moveY = (mouseY - 0.5) * depth;
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        // Add subtle movement to main image
        const mainImage = document.querySelector('.main-image-container');
        if (mainImage) {
            const moveX = (mouseX - 0.5) * -20;
            const moveY = (mouseY - 0.5) * -20;
            mainImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });

    // Add feature pill click handlers
    const featurePills = document.querySelectorAll('.feature-pill');
    featurePills.forEach(pill => {
        pill.addEventListener('click', function () {
            // Remove active class from all pills
            featurePills.forEach(p => p.classList.remove('active'));
            // Add active class to clicked pill
            this.classList.add('active');

            // Create or update feature description
            let featureContent = document.querySelector('.feature-content');
            if (!featureContent) {
                featureContent = document.createElement('div');
                featureContent.className = 'feature-content';
                document.querySelector('.features-container').after(featureContent);
            }

            // Set content based on clicked feature
            const featureType = this.querySelector('span').textContent;
            let description = '';

            switch (featureType) {
                case 'Sports Training':
                    description = 'Our comprehensive sports program develops physical fitness, teamwork, and sportsmanship through various indoor and outdoor activities.';
                    break;
                case 'STEM Education':
                    description = 'Hands-on learning in Science, Technology, Engineering, and Mathematics to develop critical thinking and problem-solving skills.';
                    break;
                case 'Arts & Culture':
                    description = 'Creative expression through visual arts, music, dance, and drama to nurture artistic talents and cultural appreciation.';
                    break;
                case 'Global Curriculum':
                    description = 'Internationally recognized curriculum that prepares students for global challenges and opportunities.';
                    break;
                default:
                    description = 'Click on a feature to learn more about our programs.';
            }

            // Animate the content change
            featureContent.style.opacity = '0';
            setTimeout(() => {
                featureContent.innerHTML = `<p>${description}</p>`;
                featureContent.style.opacity = '1';
            }, 300);
        });
    });

    // Removed counter animation code - moved to counter.js
});

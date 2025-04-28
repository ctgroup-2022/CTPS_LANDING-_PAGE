/**
 * Dynamic form handling for the school website
 */
document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'contact');
        });
    }
    
    // Application form handling
    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'application');
        });
    }
    
    // Other forms can be added here
    
    /**
     * Generic form submission handler with animations
     * @param {HTMLFormElement} form - The form element
     * @param {string} formType - Type of form (contact, application, etc.)
     */
    function handleFormSubmission(form, formType) {
        // Show loading spinner
        showLoadingSpinner(form);
        
        // Collect form data
        const formData = new FormData(form);
        formData.append('form_type', formType);
        
        // Send AJAX request
        fetch('backend/process_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Hide loading spinner
            hideLoadingSpinner(form);
            
            if (data.success) {
                // Show success message with animation
                showFormMessage(form, data.message, 'success');
                
                // Reset form
                form.reset();
                
                // Add success animation
                animateFormSuccess(form);
            } else {
                // Show error message
                showFormMessage(form, data.message || 'Form submission failed', 'error');
                
                // Highlight fields with errors
                highlightFormErrors(form, data.errors);
            }
        })
        .catch(error => {
            // Hide loading spinner
            hideLoadingSpinner(form);
            
            // Show error message
            showFormMessage(form, 'An unexpected error occurred. Please try again.', 'error');
            console.error('Form submission error:', error);
        });
    }
    
    /**
     * Show loading spinner on form
     */
    function showLoadingSpinner(form) {
        // Remove any existing spinner
        const existingSpinner = form.querySelector('.form-spinner');
        if (existingSpinner) {
            existingSpinner.remove();
        }
        
        // Create spinner
        const spinner = document.createElement('div');
        spinner.className = 'form-spinner';
        spinner.innerHTML = `
            <div class="spinner-container">
                <div class="spinner-circle"></div>
                <div class="spinner-text">Sending...</div>
            </div>
        `;
        
        // Add spinner to form
        form.appendChild(spinner);
        
        // Disable submit button
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
        }
    }
    
    /**
     * Hide loading spinner
     */
    function hideLoadingSpinner(form) {
        // Remove spinner
        const spinner = form.querySelector('.form-spinner');
        if (spinner) {
            spinner.remove();
        }
        
        // Enable submit button
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = false;
        }
    }
    
    /**
     * Show form message (success/error)
     */
    function showFormMessage(form, message, type) {
        // Remove any existing messages
        const existingMessage = form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        
        // Insert message after form
        form.parentNode.insertBefore(messageElement, form.nextSibling);
        
        // Fade in animation
        setTimeout(() => {
            messageElement.classList.add('show');
        }, 10);
        
        // Auto remove after some time
        if (type === 'success') {
            setTimeout(() => {
                messageElement.classList.remove('show');
                setTimeout(() => {
                    messageElement.remove();
                }, 500);
            }, 5000);
        }
    }
    
    /**
     * Highlight form fields with errors
     */
    function highlightFormErrors(form, errors) {
        // Reset previous errors
        form.querySelectorAll('.error-field').forEach(field => {
            field.classList.remove('error-field');
            const errorText = field.parentNode.querySelector('.error-text');
            if (errorText) {
                errorText.remove();
            }
        });
        
        // No errors to highlight
        if (!errors) return;
        
        // Add error highlighting to fields
        Object.entries(errors).forEach(([fieldName, errorMessage]) => {
            const field = form.querySelector(`[name="${fieldName}"]`);
            if (field) {
                field.classList.add('error-field');
                
                // Add error text
                const errorText = document.createElement('div');
                errorText.className = 'error-text';
                errorText.textContent = errorMessage;
                field.parentNode.appendChild(errorText);
                
                // Add shake animation
                field.classList.add('shake-animation');
                setTimeout(() => {
                    field.classList.remove('shake-animation');
                }, 500);
            }
        });
    }
    
    /**
     * Success animation for form
     */
    function animateFormSuccess(form) {
        form.classList.add('form-success');
        
        // Create confetti effect
        createConfetti(form);
        
        // Remove success class after animation completes
        setTimeout(() => {
            form.classList.remove('form-success');
        }, 2000);
    }
    
    /**
     * Create confetti effect for form success
     */
    function createConfetti(form) {
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        
        // Create multiple confetti particles
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDelay = `${Math.random() * 3}s`;
            confetti.style.backgroundColor = getRandomColor();
            confettiContainer.appendChild(confetti);
        }
        
        // Add to document
        form.appendChild(confettiContainer);
        
        // Remove after animation
        setTimeout(() => {
            confettiContainer.remove();
        }, 3000);
    }
    
    /**
     * Get random color for confetti
     */
    function getRandomColor() {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', 
                       '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', 
                       '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});

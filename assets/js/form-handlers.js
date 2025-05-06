/**
 * Dynamic form handling for the school website
 */
document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling (if you have one)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'contact');
        });
    }
    
    // Application form handling
    const applicationForm = document.getElementById('application-form');
    const formSubmitBtn = document.getElementById('form-submit-btn');
    
    if (applicationForm && formSubmitBtn) {
        // Use click event on button instead of submit event on form
        formSubmitBtn.addEventListener('click', function() {
            // Show loading state
            const submitBtn = this;
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Processing...';
            submitBtn.disabled = true;
            
            // Clear previous error states
            applicationForm.querySelectorAll('.error-field').forEach(field => {
                field.classList.remove('error-field');
            });
            
            const formMessage = applicationForm.querySelector('.form-message');
            if (formMessage) {
                formMessage.innerHTML = '';
                formMessage.className = 'form-message';
            }
            
            // Collect form data
            const formData = new FormData(applicationForm);
            
            // Enhanced client-side validation
            const requiredFields = ['name', 'email'];
            let hasErrors = false;
            let errorMessages = [];
            
            requiredFields.forEach(field => {
                const fieldElement = applicationForm.querySelector(`[name="${field}"]`);
                if (!fieldElement || !fieldElement.value.trim()) {
                    hasErrors = true;
                    errorMessages.push(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
                    if (fieldElement) {
                        fieldElement.closest('.form-input-container').classList.add('error-field');
                    }
                }
            });
            
            const email = applicationForm.querySelector('[name="email"]')?.value || '';
            if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                hasErrors = true;
                errorMessages.push('Please enter a valid email address');
                applicationForm.querySelector('[name="email"]').closest('.form-input-container').classList.add('error-field');
            }
            
            // Stop here if we have validation errors
            if (hasErrors) {
                showToast(errorMessages[0] || 'Please correct the errors before submitting.', 'error');
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                return;
            }
            
            // Debug: Log form data
            console.log('Form data being sent:', Object.fromEntries(formData));
            
            // If validation passes, send data to backend
            fetch('backend/process_registration.php', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Server responded with status: ${response.status}`);
                }
                return response.text().then(text => {
                    try {
                        return JSON.parse(text);
                    } catch(e) {
                        console.error('Failed to parse server response:', text);
                        throw new Error('Invalid server response format');
                    }
                });
            })
            .then(data => {
                // Reset button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                console.log('Server response:', data); // Debug log
                
                // Display response
                if (data.success) {
                    // Show success toast
                    showToast(data.message, 'success');
                    
                    // Reset form after successful submission
                    applicationForm.reset();
                    
                    // Add success animation
                    animateFormSuccess(applicationForm);
                } else {
                    // Show error toast
                    showToast(data.message || 'Form submission failed', 'error');
                    
                    // Highlight fields with errors if available
                    if (data.errors) {
                        Object.keys(data.errors).forEach(field => {
                            const fieldElement = applicationForm.querySelector(`[name="${field}"]`);
                            if (fieldElement) {
                                fieldElement.closest('.form-input-container').classList.add('error-field');
                            }
                        });
                    }
                }
            })
            .catch(error => {
                console.error('Form submission error:', error);
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                showToast('Connection error: ' + error.message, 'error');
            });
        });
        
        // Prevent normal form submission and redirect
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            return false;
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
    
    /**
     * Show an enhanced toast message
     * @param {string} message - Message to display
     * @param {string} type - success or error
     */
    function showToast(message, type) {
        // Remove any existing toasts
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast-notification ${type}`;
        
        // Add icon based on type
        const icon = type === 'success' ? '✓' : '✕';
        
        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-message">${message}</div>
            <button class="toast-close">&times;</button>
        `;
        
        // Add to document body
        document.body.appendChild(toast);
        
        // Add show class after a small delay (for animation)
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Add click event to close button
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        });
        
        // Auto remove after 5 seconds for success, 7 seconds for errors
        const duration = type === 'success' ? 5000 : 7000;
        setTimeout(() => {
            if (document.body.contains(toast)) {
                toast.classList.remove('show');
                setTimeout(() => {
                    if (document.body.contains(toast)) {
                        toast.remove();
                    }
                }, 300);
            }
        }, duration);
    }
    
    // Make showToast available globally (optional)
    window.showToast = showToast;
});

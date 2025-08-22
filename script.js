document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    
    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Function to validate password (at least 6 characters)
    function isValidPassword(password) {
        return password.length >= 6;
    }
    
    // Real-time email validation
    emailInput.addEventListener('input', function() {
        if (!isValidEmail(emailInput.value) && emailInput.value !== '') {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.add('invalid');
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('invalid');
        }
    });
    
    // Real-time password validation
    passwordInput.addEventListener('input', function() {
        if (!isValidPassword(passwordInput.value) && passwordInput.value !== '') {
            passwordError.textContent = 'Password must be at least 6 characters long';
            passwordInput.classList.add('invalid');
        } else {
            passwordError.textContent = '';
            passwordInput.classList.remove('invalid');
        }
    });
    
    // Form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        // Validate email
        if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.add('invalid');
            isValid = false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('invalid');
        }
        
        // Validate password
        if (!isValidPassword(passwordInput.value)) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            passwordInput.classList.add('invalid');
            isValid = false;
        } else {
            passwordError.textContent = '';
            passwordInput.classList.remove('invalid');
        }
        
        if (isValid) {
            // In a real application, you would handle the login process here
            // For demonstration purposes, we'll just show an alert
            alert('Login successful! Form would be submitted to the server.');
            // loginForm.submit(); // Uncomment this line to actually submit the form
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Steps
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');
    const stepSuccess = document.getElementById('step-success');

    // Forms
    const emailForm = document.getElementById('emailForm');
    const otpForm = document.getElementById('otpForm');
    const passwordForm = document.getElementById('passwordForm');

    // Elements
    const otpError = document.getElementById('otpError');
    const passwordError = document.getElementById('passwordError');
    const resendOtp = document.getElementById('resendOtp');

    // Function to hide all steps and show target step
    const showStep = (stepElement) => {
        document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
        stepElement.classList.add('active');
    };

    // Step 1: Handle Email Submission
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('resetEmail').value;
        // Simple regex to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(email)) {
            // Success, proceed to OTP step
            showStep(step2);
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Step 2: Handle OTP Verification
    otpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const otp = document.getElementById('otpCode').value;
        
        // Simulate OTP validation (use dummy value like 123456)
        if (otp === '123456') {
            otpError.textContent = '';
            showStep(step3);
        } else {
            otpError.textContent = 'Invalid OTP. Please try again.';
        }
    });

    // Handle Resend OTP
    resendOtp.addEventListener('click', (e) => {
        e.preventDefault();
        alert('A new OTP has been sent to your email.');
    });

    // Step 3: Handle Password Reset
    passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!newPassword || !confirmPassword) {
            passwordError.textContent = 'Passwords cannot be empty.';
            return;
        }

        if (newPassword === confirmPassword) {
            passwordError.textContent = '';
            // Show success message
            showStep(stepSuccess);
        } else {
            passwordError.textContent = 'Passwords do not match.';
        }
    });
});

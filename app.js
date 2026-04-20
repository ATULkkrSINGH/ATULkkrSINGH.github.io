const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle menu on hamburger click
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a navigation link is clicked
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// Handle login form submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Check if password is exactly "123"
        if (password === '123') {
            window.location.href = 'exam-categories.html';
        } else {
            alert('Password is incorrect');
        }
    });
}

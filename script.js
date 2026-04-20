// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// Toggle mobile menu navigation
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle menu icon between bars and times (close)
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile nav when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Add subtle box-shadow and height transition to header on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
        header.style.height = '70px';
    } else {
        header.style.boxShadow = 'none';
        header.style.height = '80px';
    }
});

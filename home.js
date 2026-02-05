// script.js

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Update active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Button click handlers
document.querySelector('.btn-talk').addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn-hire').addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// Form submission handler
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.querySelector('.contact-form input[type="text"]').value;
    const email = document.querySelector('.contact-form input[type="email"]').value;
    const message = document.querySelector('.contact-form textarea').value;
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    document.querySelector('.contact-form').reset();
});

// Simple animation for skill items on scroll
const skillItems = document.querySelectorAll('.skill-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Set initial state for animation
skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(item);
});

// Portfolio items animation
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(item);
});
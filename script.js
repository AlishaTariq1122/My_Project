// Toggle Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('#services').classList.toggle('dark-mode');
    document.querySelector('#projects').classList.toggle('dark-mode');
    document.querySelector('#testimonials').classList.toggle('dark-mode');
    document.querySelector('#contact').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
});

// Testimonial Slider
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

setInterval(() => {
    index = (index + 1) % testimonials.length;
    testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
}, 5000);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP Animations
gsap.from('.animated-text', {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: 'power3.out'
});

gsap.from('.service-card', {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#services',
        start: 'top 80%'
    }
});

gsap.from('.project-card', {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%'
    }
});
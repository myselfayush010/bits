// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to elements when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section, .link-card').forEach((el) => {
        observer.observe(el);
        // Add initial fade-in class for immediate visibility
        requestAnimationFrame(() => el.classList.add('fade-in'));
    });
});

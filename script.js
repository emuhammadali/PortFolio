document.addEventListener('DOMContentLoaded', function() {
    new Typed('#element', {
    strings: ['Frontend Developer', 'SQL Database Expert', '.NET Developer', 'Python Programmer',],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Filter button active state
    document.querySelectorAll('.btn-nav').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.btn-nav').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            mixer.filter(this.getAttribute('data-filter'));
        });
    });

    // Animate progress bars on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.progress').forEach(progress => {
                    progress.style.width = progress.style.getPropertyValue('--progress');
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });

    // Smooth scrolling for navigation links
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

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });

    // Scroll animations with ScrollReveal
    ScrollReveal({
        distance: '50px',
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0.5, 1)'
    }).reveal('.section-container', { interval: 200 });
});

// Scroll to Top Button Visibility (Only in the footer)
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const footer = document.querySelector('footer');

window.onscroll = function() {
  if (footer.getBoundingClientRect().top <= window.innerHeight) {
    scrollToTopBtn.style.display = "block"; // Show button when in the footer
  } else {
    scrollToTopBtn.style.display = "none"; // Hide button when not in the footer
  }
};

// Scroll to the top function
scrollToTopBtn.addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
});

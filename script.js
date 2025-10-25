// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
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
        navMenu.classList.remove('active');
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Scroll Progress Bar
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
}

// Fade In Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Header Background on Scroll
const header = document.querySelector('.header');
function updateHeader() {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.9)';
        header.style.backdropFilter = 'blur(10px)';
    }
}

// Event Listeners
window.addEventListener('scroll', () => {
    highlightNavLink();
    updateScrollProgress();
    updateHeader();
});

window.addEventListener('load', () => {
    highlightNavLink();
    updateScrollProgress();
});

// Typing Animation for Hero
const subtitle = document.querySelector('.subtitle');
const titles = ['Full Stack Developer', 'Data Enthusiast', 'Problem Solver', 'Tech Innovator'];
let titleIndex = 0;

function typeTitle() {
    const currentTitle = titles[titleIndex];
    subtitle.style.opacity = '0';
    
    setTimeout(() => {
        subtitle.textContent = currentTitle;
        subtitle.style.opacity = '1';
        titleIndex = (titleIndex + 1) % titles.length;
    }, 300);
}

// Start typing animation
setInterval(typeTitle, 3000);

// Add some interactive elements
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0deg)';
    });
});

// Parallax effect for hero avatar
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-avatar');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});
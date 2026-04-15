// ========================================
// LOADING SCREEN
// ========================================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ========================================
// THEME TOGGLE (Dark/Light Mode)
// ========================================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-theme');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// SMOOTH SCROLL & MOBILE MENU CLOSE
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu
            const navUl = document.querySelector('.navbar ul');
            const menuToggle = document.querySelector('.menu-toggle');
            navUl.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// ========================================
// NAVBAR ACTIVE LINK ON SCROLL
// ========================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navUl.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// ========================================
// TYPING EFFECT (About Section)
// ========================================
const typingText = document.getElementById('typing-text');
const lines = [
    "👋 Hi, I am Ziad Ayman, a passionate Computer Science student and Full Stack .NET Developer.",
    "💻 I specialize in building scalable and responsive web applications with modern technologies.",
    "🎨 On the front-end, I create interactive interfaces using HTML, CSS, JavaScript, and React.",
    "⚙️ On the back-end, I develop robust solutions with C#, ASP.NET, and SQL Server.",
    "🚀 I enjoy learning new technologies, solving complex problems, and contributing to impactful projects.",
    "📚 Currently pursuing my Bachelor's degree in Computer Science at 6th of October University.",
    "💡 Always eager to take on new challenges and collaborate on exciting projects!"
];

let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 50;

function typeEffect() {
    if (!typingText) return;
    
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            typingText.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            typingText.innerHTML += "<br><br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeEffect, 300);
        }
    }
}

// Start typing effect when section is in view
const aboutSection = document.querySelector('#about');
const typingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && typingText.innerHTML === '') {
            typeEffect();
        }
    });
}, { threshold: 0.3 });

if (aboutSection) {
    typingObserver.observe(aboutSection);
}

// ========================================
// COUNTER ANIMATION (Statistics)
// ========================================
const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target + '+';
        }
    };
    
    updateCounter();
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            if (counter.textContent === '0') {
                animateCounter(counter);
            }
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ========================================
// HERO IMAGE 3D EFFECT
// ========================================
const heroImg = document.querySelector('.hero-img');

function resetHeroTransform() {
    if (heroImg) {
        heroImg.style.transform = 'rotateY(0) rotateX(0) scale(1)';
    }
}

function initHero3DEffect() {
    if (!heroImg) return;
    
    if (window.innerWidth > 768) {
        heroImg.addEventListener('mousemove', (e) => {
            const rect = heroImg.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateY = (x / rect.width) * 20;
            const rotateX = -(y / rect.height) * 20;
            
            heroImg.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
        });
        
        heroImg.addEventListener('mouseleave', resetHeroTransform);
    } else {
        resetHeroTransform();
        heroImg.removeEventListener('mousemove', () => {});
        heroImg.removeEventListener('mouseleave', resetHeroTransform);
    }
}

initHero3DEffect();
window.addEventListener('resize', initHero3DEffect);

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
const revealElements = document.querySelectorAll(
    '.skill-card, .soft-skill-card, .service-card, .project-card, .stat-card, .timeline-item, .contact-item'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// ========================================
// BACKGROUND CANVAS ANIMATION
// ========================================
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle system
let particles = [];
const particleCount = window.innerWidth < 768 ? 50 : 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 195, 247, ${this.opacity})`;
        ctx.fill();
    }
}

// Initialize particles
function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

initParticles();

// Draw connections between nearby particles
function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                const opacity = (150 - distance) / 150 * 0.2;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(79, 195, 247, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

// Animation loop
function animate() {
    // Get current theme
    const isLightTheme = document.body.classList.contains('light-theme');
    
    // Clear canvas with theme-appropriate background
    ctx.fillStyle = isLightTheme ? '#ffffff' : '#0f0f0f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    // Connect particles
    connectParticles();
    
    requestAnimationFrame(animate);
}

animate();

// Reinitialize particles on resize
window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
});

// ========================================
// CONTACT FORM HANDLING
// ========================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const mailtoLink = `mailto:ziad23016042@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Thank you for your message! Your email client will open shortly.');
        
        // Reset form
        contactForm.reset();
    });
}

// ========================================
// SKILL CARDS INTERACTION
// ========================================
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    });
});

// ========================================
// NAVBAR BACKGROUND ON SCROLL
// ========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.padding = '15px 80px';
    } else {
        navbar.style.padding = '20px 80px';
    }
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    // Scroll-dependent operations
}, 10));

// ========================================
// LAZY LOADING IMAGES
// ========================================
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c👋 Welcome to my Portfolio!', 'color: #4fc3f7; font-size: 20px; font-weight: bold;');
console.log('%c💼 Looking for a developer? Let\'s connect!', 'color: #81d4fa; font-size: 14px;');
console.log('%c📧 Email: ziad23016042@gmail.com', 'color: #4fc3f7; font-size: 14px;');
console.log('%c🔗 GitHub: https://github.com/ziadelmaghrabi', 'color: #4fc3f7; font-size: 14px;');

// ========================================
// EASTER EGG - KONAMI CODE
// ========================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiPattern.length);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        // Trigger special animation
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        alert('🎉 You found the secret! Here\'s a virtual high-five! ✋');
    }
});

// Rainbow animation for easter egg
const style = document.createElement('style');
style.innerHTML = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

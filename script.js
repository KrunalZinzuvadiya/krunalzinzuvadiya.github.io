// Optimized JavaScript for 3D Portfolio

// Sticky Navbar
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
    lastScroll = currentScroll;
}, { passive: true });

// Active Navigation
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section[id]");

    const highlightActiveSection = () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('clicked');
            const href = link.getAttribute('href');
            if (href === `#${current}` || (current === '' && (href === '#' || href === ''))) {
                link.classList.add('clicked');
            }
        });
    };

    window.addEventListener('scroll', highlightActiveSection, { passive: true });

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            links.forEach(item => item.classList.remove("clicked"));
            link.classList.add("clicked");
        });
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Optimized Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about, .skills, .certificate, .contact, .Mywork');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    const skillBoxes = document.querySelectorAll('.skills__box');
    skillBoxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(box);
    });

    const galleryItems = document.querySelectorAll('.gallery a');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.95)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

// Optimized 3D Mouse Tracking - Throttled
let ticking = false;

function update3DTransform(element, e) {
    if (!ticking) {
        requestAnimationFrame(() => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            ticking = false;
        });
        ticking = true;
    }
}

function reset3DTransform(element, defaultTransform = '') {
    element.style.transform = defaultTransform;
}

// Apply 3D effects only on hover-capable devices
if (window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('DOMContentLoaded', () => {
        // Home image 3D effect
        const homeImg = document.querySelector('.home-img');
        if (homeImg) {
            homeImg.addEventListener('mousemove', (e) => {
                update3DTransform(homeImg, e);
            }, { passive: true });
            
            homeImg.addEventListener('mouseleave', () => {
                reset3DTransform(homeImg, 'translateY(-50%)');
            });
        }

        // About image 3D effect
        const aboutImg = document.querySelector('.about-img');
        if (aboutImg) {
            aboutImg.addEventListener('mousemove', (e) => {
                update3DTransform(aboutImg, e);
            }, { passive: true });
            
            aboutImg.addEventListener('mouseleave', () => {
                reset3DTransform(aboutImg);
            });
        }

        // Skills boxes 3D effect
        const skillBoxes = document.querySelectorAll('.skills__box');
        skillBoxes.forEach(box => {
            box.addEventListener('mousemove', (e) => {
                const rect = box.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 25;
                const rotateY = (centerX - x) / 25;
                
                box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`;
            }, { passive: true });
            
            box.addEventListener('mouseleave', () => {
                box.style.transform = '';
            });
        });

        // Gallery items 3D effect
        const galleryItems = document.querySelectorAll('.gallery a');
        galleryItems.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 30;
                const rotateY = (centerX - x) / 30;
                
                item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) translateZ(20px) scale(1.02)`;
            }, { passive: true });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = '';
            });
        });
    });
}

// Button ripple effect
document.querySelectorAll('.btn, .slide-more, .contact-left button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Form submission
const contactForm = document.querySelector('.contact-left form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const button = this.querySelector('button');
        if (button) {
            const originalText = button.textContent;
            button.textContent = 'Sending...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 3000);
        }
    });
}

// Console message
console.log('%c👋 Welcome to Krunal\'s Portfolio!', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cOptimized for performance', 'color: #7c3aed; font-size: 12px;');

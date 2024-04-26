document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = document.querySelectorAll('section');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Scroll-triggered animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Text typing animation
    const typingText = document.querySelector('.typing');
    const textToType = "Cybersecurity Specialist and Ethical Hacker.";
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            typingText.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    if (typingText) {
        typeText();
    }

    // Dynamic background animation
    const background = document.querySelector('body');
    let gradientAngle = 0;

    function updateBackground() {
        gradientAngle = (gradientAngle + 0.1) % 360;
        background.style.backgroundImage = `linear-gradient(${gradientAngle}deg, #073B4C, #118AB2)`;
        requestAnimationFrame(updateBackground);
    }

    updateBackground();
});



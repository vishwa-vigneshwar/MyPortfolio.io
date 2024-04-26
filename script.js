document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const profileImg = document.querySelector('.profile-img');

    // Smooth scrolling for navigation links
    for (let link of navLinks) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    // Rotate image on click
    profileImg.addEventListener('click', () => {
        profileImg.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            profileImg.style.transform = 'rotate(0deg)';
        }, 1000);
    });
});

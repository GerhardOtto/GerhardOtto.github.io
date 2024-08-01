function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

const links = document.querySelectorAll('.nav-links a, .menu-links a');
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        let navHeight;
        if (window.innerWidth < 600) {
            navHeight = 10;
        } else if (window.innerWidth >= 600 && window.innerWidth < 1200) {
            navHeight = 10;
        } else {
            navHeight = 17;
        }

        const navHeightPx = (navHeight * window.innerHeight) / 100;
        window.scrollTo({
            top: targetElement.offsetTop - navHeightPx,
            behavior: 'smooth'
        });
    });
});



document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.section--page');
    hiddenElements.forEach((element) => {
        observer.observe(element);
    });

    const emailElement = document.getElementById("email");
    if (emailElement) {
        emailElement.addEventListener('click', copyEmail);
    }

});

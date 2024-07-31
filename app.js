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
        const navHeight = document.querySelector('nav').offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - navHeight,
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

    function copyEmail() {
        const emailText = document.getElementById("email").innerText.trim();
        navigator.clipboard.writeText(emailText).then(function() {
            alert('Email copied to clipboard');
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    }

    const emailElement = document.getElementById("email");
    if (emailElement) {
        emailElement.addEventListener('click', copyEmail);
    }

});

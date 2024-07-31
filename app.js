function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

document.querySelectorAll('.menu-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        const navBarHeight = document.querySelector('nav').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: elementPosition - navBarHeight,
            behavior: 'smooth'
        });

        toggleMenu(); // Close the menu after clicking
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

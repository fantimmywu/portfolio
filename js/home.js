window.onscroll = function() {
    let backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.opacity = "1";
        backToTopButton.style.visibility = "visible";
    } else {
        backToTopButton.style.opacity = "0";
        backToTopButton.style.visibility = "hidden";
    }
};

document.getElementById("back-to-top").addEventListener("click", function(event) {
    event.preventDefault();
    const aboutMeSection = document.getElementById("about-me");
    window.scrollTo({
        top: aboutMeSection.offsetTop,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav__link--anchor');

    function changeNavOnScroll() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeNavOnScroll();
    window.addEventListener('scroll', changeNavOnScroll);
});
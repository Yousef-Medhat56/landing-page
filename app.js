const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navBar = document.querySelector('.nav-bar-list');
    const navLink = document.querySelectorAll('.nav-bar-list li')

    burger.addEventListener('click', () => {
        navBar.classList.toggle("nav-active");


        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navBarFade 0.2s ease forwards ${index / 7 + 0.5}s`
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();
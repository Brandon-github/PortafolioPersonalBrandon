let header = document.querySelector('.header');
let logo = document.getElementById('logo');

setInterval(() => {
    let scy = window.scrollY;

    if (scy > 20) {
        header.classList.add('active');
        logo.setAttribute('src', './assets/img/svg/logo-active.svg');
    } else {
        header.classList.remove('active');
        logo.setAttribute('src', './assets/img/svg/logo.svg');
    }
}, 10)
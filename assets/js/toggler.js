let toggler_button = document.querySelector('#toggler');
let navigation = document.querySelector('.nav');

function TogglerButtonAction() {
    navigation.classList.toggle('active');
    toggler_button.classList.toggle('active');
}

toggler_button.addEventListener('click', TogglerButtonAction);
const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
});

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
});

document.addEventListener("click", (e) => {
    if (!menuList.contains(e.target) && !menuBtn.contains(e.target)) {
        menuList.classList.remove("menu__list--open");
        menuShadow.classList.remove("menu--open");
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-list__form');
    const popup = document.getElementById('popup');
    const popupCloseBtn = document.getElementById('popupCloseBtn');
    const checkbox = document.querySelector('input[name="privacy"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!checkbox.checked) {
            alert('You must accept the Privacy policy to submit.');
            return;
        }
        popup.classList.add('open');
        popup.classList.remove('hidden');
        form.reset();
    });

    popupCloseBtn.addEventListener('click', () => {
        popup.classList.remove('open');
        popup.classList.add('hidden');
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('open');
            popup.classList.add('hidden');
        }
    });
});

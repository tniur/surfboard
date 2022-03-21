const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuOpenBtn = document.querySelector(".hamburger");
const hamburgerMenuCloseBtn = document.querySelector(".hamburger-menu__close");

hamburgerMenuOpenBtn.addEventListener('click', element => {
    hamburgerMenu.style.display = 'block';
});

hamburgerMenuCloseBtn.addEventListener('click', element => {
    hamburgerMenu.style.display = 'none';
});
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuOpenBtn = document.querySelector('.hamburger');
const hamburgerMenuCloseBtn = document.querySelector('.hamburger-menu__close');
const item = document.querySelectorAll('.navigation__link');

hamburgerMenuOpenBtn.addEventListener('click', (element) => {
	hamburgerMenu.style.display = 'block';
});

hamburgerMenuCloseBtn.addEventListener('click', (element) => {
	hamburgerMenu.style.display = 'none';
});

for (let i = 0; i < item.length; i++) {
	item[i].addEventListener('click', (element) => {
		hamburgerMenu.style.display = 'none';
	});
}

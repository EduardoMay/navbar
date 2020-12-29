const openMenuBtn = document.getElementById('btn-open');
let header = document.querySelector('header');

openMenuBtn.addEventListener('click', (_) => {
	switchViewMenu();
});

function smoothScrollMenu() {
	const itemLink = document.querySelectorAll('.nav__link');

	itemLink.forEach((item) => {
		item.addEventListener('click', scrollToElement);
	});
}

function scrollToElement(e) {
	e.preventDefault();
	screen.width < 768 && switchViewMenu();

	const labelText = e.target.attributes['target-nav'].value;
	const positionTop = document
		.querySelector(`#${labelText}`)
		.getBoundingClientRect().top;
	const top = screen.width < 768 ? 60 : 80;

	document.querySelector('body, html').scroll({
		top: positionTop + scrollY - top,
		behavior: 'smooth',
	});
}

function switchViewMenu() {
	document.querySelector('.nav__items').classList.toggle('active');
	document.querySelector('main').classList.toggle('nav-active');
	document.querySelector('html').classList.toggle('no-scroll');
	document.querySelector('body').classList.toggle('no-scroll');
}

window.addEventListener('DOMContentLoaded', () => {
	header.classList.toggle('sticky', window.scrollY > 0);
	smoothScrollMenu();
});

window.addEventListener('scroll', (_) => {
	header.classList.toggle('sticky', window.scrollY > 0);
});

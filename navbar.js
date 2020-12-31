const openMenuBtn = document.getElementById('btn-open'),
	header = document.querySelector('header');

/**
 * Crea un evento para cada elemento del menu ecepto el elemento que tenga submenu
 */
function smoothScrollMenu() {
	const itemLink = document.querySelectorAll('#nav-link');

	itemLink.forEach((item) => {
		item.addEventListener('click', scrollToElement);
	});
}

/**
 * Scroll suave al hacer click en cualquier item del menu
 *
 * @param   {event}  e  [event del elemento]
 */
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

/*-------------------- View menu on movil --------------------*/
openMenuBtn.addEventListener('click', switchViewMenu);

/**
 * Agrega clases para mostrar menu al dar click en el icono del menu
 */
function switchViewMenu() {
	document.querySelector('.nav__items').classList.toggle('active');
	document.querySelector('main').classList.toggle('nav-active');
	document.querySelector('html').classList.toggle('no-scroll');
	document.querySelector('body').classList.toggle('no-scroll');
}

/**
 * Agrega la clase 'sticky' si hay sroll
 * Funcion hacer scroll al dar click en cualquier item del menu
 */
window.addEventListener('DOMContentLoaded', () => {
	header.classList.toggle('sticky', window.scrollY > 0);
	smoothScrollMenu();
});

/*-------------------- Menu sticky --------------------*/
window.addEventListener('scroll', (_) => {
	header.classList.toggle('sticky', window.scrollY > 0);
});

/*-------------------- Toggle view submenu on movil --------------------*/
const itemsSubmenu = document.querySelectorAll('#test');

itemsSubmenu.forEach((element) => {
	element.addEventListener('click', (e) => {
		const element = e.target.nextElementSibling;

		if (screen.width < 768) {
			element.style.maxHeight !== '500px' ||
			element.style.maxHeight === ''
				? (element.style.maxHeight = '500px')
				: (element.style.maxHeight = '0');
		}
	});
});

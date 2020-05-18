const menuBurger = document.querySelector('.js-burgerMenu');
const burger = document.querySelector('.js-burger');
const menuList = document.querySelector('.js-menuList');

const sidebarDropdownButton = document.querySelector('.js-sidebarDropdownButton');
const sidebarDropdownList = document.querySelector('.js-sidebarDropdownList');

const navCurrencyButton = document.querySelector('.js-navCurrencyButton');
const navCurrencyList = document.querySelector('.js-navCurrencyList');

const toggleNavCurrencyDropdownMenu = () => {
	navCurrencyList.classList.toggle('hidden');
};

const toggleAsideDropdownMenu = () => {
	sidebarDropdownList.classList.toggle('hidden');
};

const toggleMobileMenu = () => {
	menuList.classList.toggle('hidden');
	burger.classList.toggle('burger-active'); 
};

menuBurger.addEventListener('click', toggleMobileMenu);
sidebarDropdownButton.addEventListener('click', toggleAsideDropdownMenu);
navCurrencyButton.addEventListener('click', toggleNavCurrencyDropdownMenu);

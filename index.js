import './assets/scss/main.scss';
import './assets/images/logo.svg';

const headerBurger = document.querySelector('.burger');
const headerMenu = document.querySelector('.menu');
const headerLinks = document.querySelectorAll('.header__link');
const headerClose = document.querySelector('.header__close');
const page = document.querySelector('.page');

const closeMenu = (event) => {
  if (
    event.target.classList.contains('header__link') ||
    event.target.classList.contains('active') ||
    event.target.classList.contains('header__close')
  ) {
    headerMenu.classList.remove('active');
    headerClose.classList.remove('active');
    page.classList.remove('noscroll');
  }
};

headerBurger.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  headerClose.classList.toggle('active');
  page.classList.toggle('noscroll');
});

headerLinks.forEach((el) => el.addEventListener('click', closeMenu));

headerClose.addEventListener('click', closeMenu);

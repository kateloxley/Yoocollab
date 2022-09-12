import './assets/scss/main.scss';
import './assets/images/logo.svg';

const headerBurger = document.querySelector('.burger');
const headerMenu = document.querySelector('.menu');
const headerLinks = document.querySelectorAll('.header__link');
const headerWhiteLinks = document.querySelectorAll('.menu__link_white');
const headerClose = document.querySelector('.header__close');
const page = document.querySelector('.page');

const closeMenu = (event) => {
  if (
    event.target.classList.contains('header__link') ||
    event.target.classList.contains('header__link_white') ||
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

if (headerLinks) {
  headerLinks.forEach((el) => el.addEventListener('click', closeMenu));
}

headerClose.addEventListener('click', closeMenu);

const seeMore = document.querySelector('.provided-services__more');
const openMore = () => {
  if (seeMore) {
    document
      .querySelectorAll('.provided-services__item')
      .forEach((el) => el.classList.remove('hide'));
    seeMore.style.display = 'none';
  }
};

if (seeMore) {
  seeMore.addEventListener('click', openMore);
}

const more = document.querySelectorAll('.readmore');
const moreText = document.querySelectorAll('.more');

const readMore = (event) => {
  if (
    event.target.classList.contains('readmore') &&
    event.target.classList.contains('top-banner__more')
  ) {
    document.querySelector('.top-banner__more').style.display = 'none';
    document.querySelector('.dots').style.display = 'none';
    document
      .querySelectorAll('.top-banner__text')
      .forEach((el) => el.classList.remove('more'));
  }
  if (
    event.target.classList.contains('readmore') &&
    event.target.classList.contains('benefits__more')
  ) {
    document.querySelector('.benefits__more').style.display = 'none';
    document.querySelector('.benefits__dots').style.display = 'none';
    document
      .querySelectorAll('.benefits__item-text')
      .forEach((el) => el.classList.remove('more'));
  }
  if (
    event.target.classList.contains('readmore') &&
    event.target.classList.contains('ideas-banner__more')
  ) {
    document.querySelector('.ideas-banner__more').style.display = 'none';
    document.querySelector('.ideas-banner__dots').style.display = 'none';
    document
      .querySelectorAll('.ideas-banner__text_mobile')
      .forEach((el) => el.classList.remove('more'));
  }
};

more.forEach((el) => el.addEventListener('click', readMore));

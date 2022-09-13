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
    if (
      document.querySelector('.top-banner__more') &&
      document.querySelector('.dots') &&
      document.querySelectorAll('.top-banner__text')
    ) {
      document.querySelector('.top-banner__more').style.display = 'none';
      document.querySelector('.dots').style.display = 'none';
      document
        .querySelectorAll('.top-banner__text')
        .forEach((el) => el.classList.remove('more'));
    }
  }
  if (
    event.target.classList.contains('readmore') &&
    event.target.classList.contains('benefits__more')
  ) {
    if (
      document.querySelector('.benefits__more') &&
      document.querySelector('.benefits__dots') &&
      document.querySelectorAll('.benefits__item-text')
    ) {
      document.querySelector('.benefits__more').style.display = 'none';
      document.querySelector('.benefits__dots').style.display = 'none';
      document
        .querySelectorAll('.benefits__item-text')
        .forEach((el) => el.classList.remove('more'));
    }
  }
  if (
    event.target.classList.contains('readmore') &&
    event.target.classList.contains('ideas-banner__more')
  ) {
    if (
      document.querySelector('.ideas-banner__more') &&
      document.querySelector('.ideas-banner__dots') &&
      document.querySelectorAll('.ideas-banner__text_mobile')
    ) {
      document.querySelector('.ideas-banner__more').style.display = 'none';
      document.querySelector('.ideas-banner__dots').style.display = 'none';
      document
        .querySelectorAll('.ideas-banner__text_mobile')
        .forEach((el) => el.classList.remove('more'));
    }
  }
};

if (more) {
  more.forEach((el) => el.addEventListener('click', readMore));
}

// document.querySelector('.contacts__title').addEventListener('click', () => {
//   document
//     .querySelectorAll('.form__error')
//     .forEach((el) => el.classList.add('error'));
//   document
//     .querySelectorAll('.form__input')
//     .forEach((el) => el.classList.add('error'));
// });

document.querySelectorAll('.team__col').forEach((el) =>
  el.addEventListener('click', (event) => {
    if (event.target.id == 'frontend') {
      document.querySelector('.frontend').classList.toggle('active');
      document
        .querySelector('.team__arrow_frontend')
        .classList.toggle('active');
    }
    if (event.target.id == 'backend') {
      document.querySelector('.backend').classList.toggle('active');
      document.querySelector('.team__arrow_backend').classList.toggle('active');
    }
    if (event.target.id == 'mobile') {
      document.querySelector('.mobile').classList.toggle('active');
      document.querySelector('.team__arrow_mobile').classList.toggle('active');
    }
    if (event.target.id == 'database') {
      document.querySelector('.database').classList.toggle('active');
      document
        .querySelector('.team__arrow_database')
        .classList.toggle('active');
    }
  })
);

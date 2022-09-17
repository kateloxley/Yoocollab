import './assets/scss/main.scss';

import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation]);

var swiper = new Swiper('.mySwiper', {
  initialSlide: 1,
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  speed: 700,
  loop: true,
  navigation: {
    nextEl: '.trust__arrow.left',
    prevEl: '.trust__arrow.right',
  },
});

var swiper = new Swiper('.secondSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  initialSlide: 1,
  centeredSlides: false,
  observer: true,
  observeParents: true,
  speed: 700,
});

const headerBurger = document.querySelector('.burger');
const headerMenu = document.querySelector('.menu');
const headerLinks = document.querySelectorAll('.header__link');
const headerWhiteLinks = document.querySelectorAll('.menu__link_white');
const headerClose = document.querySelector('.header__close');
const page = document.querySelector('.page');
import onsubmit from './assets/images/onsubmit.png';

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
    if (
      event.target.id == 'frontend' ||
      event.target.classList.contains('team__arrow_frontend')
    ) {
      document.querySelector('.frontend').classList.toggle('active');
      document
        .querySelector('.team__arrow_frontend')
        .classList.toggle('active');
    }
    if (
      event.target.id == 'backend' ||
      event.target.classList.contains('team__arrow_backend')
    ) {
      document.querySelector('.backend').classList.toggle('active');
      document.querySelector('team__arrow_backend').classList.toggle('active');
    }
    if (
      event.target.id == 'mobile' ||
      event.target.classList.contains('.team__arrow_mobile')
    ) {
      document.querySelector('.mobile').classList.toggle('active');
      document.querySelector('.team__arrow_mobile').classList.toggle('active');
    }
    if (
      event.target.id == 'database' ||
      event.target.classList.contains('team__arrow_database')
    ) {
      document.querySelector('.database').classList.toggle('active');
      document
        .querySelector('.team__arrow_database')
        .classList.toggle('active');
    }
  })
);

if (document.querySelector('.team__btn')) {
  document.querySelector('.team__btn').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.contact-details').classList.add('active');
    page.classList.add('noscroll');
  });
}

if (document.querySelector('.contact-details__btn')) {
  document
    .querySelector('.contact-details__btn')
    .addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector(
        '.contact-details__content'
      ).innerHTML = `<div class="contact-details__onsubmit-container"> 
    <span class="contact-details__close"></span>
    <img src=${onsubmit} alt="" />
    <p class="contact-details__onsubmit-message">Thank you for choosing us as your trusted source!</p>
    </div>`;
    });
}

const contactDetails = document.querySelector('.contact-details');

if (contactDetails) {
  contactDetails.addEventListener('click', (event) => {
    console.log(event.target);
    if (
      event.target.classList.contains('active') ||
      event.target.classList.contains('contact-details__close')
    ) {
      contactDetails.classList.remove('active');
      page.classList.remove('noscroll');
    }
  });
}

const filterMenu = document.querySelector('.allvacancies__col');
const filterBtn = document.querySelector('.allvacancies__filter-btn_mobile');
const filterBack = document.querySelector('.allvacancies__back-container');

if (filterBtn) {
  filterBtn.addEventListener('click', () => {
    filterMenu.classList.toggle('active');
  });
}

if (filterBack) {
  filterBack.addEventListener('click', () => {
    filterMenu.classList.toggle('active');
  });
}

const dropArea = document.querySelector('.job-form__label');

const dropHandler = (event) => {
  console.log('File(s) dropped');
  event.preventDefault();

  if (event.dataTransfer.items) {
    [...event.dataTransfer.items].forEach((item, i) => {
      if (item.kind === 'file') {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
      }
    });
  } else {
    [...event.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
};

const dragOverHandler = (event) => {
  console.log('File(s) in drop zone');
  event.preventDefault();
};

const highlight = (e) => {
  dropArea.classList.add('highlight');
};
const unhighlight = (e) => {
  dropArea.classList.remove('highlight');
};

if (dropArea) {
  ['dragenter', 'dragover'].forEach((eventName) => {
    dropArea.addEventListener(eventName, highlight, false);
  });
  ['dragleave', 'drop'].forEach((eventName) => {
    dropArea.addEventListener(eventName, unhighlight, false);
  });
  dropArea.addEventListener('dragenter', handlerFunction, false);
  dropArea.addEventListener('dragleave', handlerFunction, false);
  dropArea.addEventListener('dragover', handlerFunction, false);
  dropArea.addEventListener('drop', handlerFunction, false);
  dropArea.addEventListener('dragover', dragOverHandler);
  dropArea.addEventListener('drop', dropHandler);
}

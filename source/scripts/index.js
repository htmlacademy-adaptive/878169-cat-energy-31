/* в этот файл добавляет скрипты*/
document.querySelector('.main-nav__toggle').classList.remove('main-nav__toggle--no-js');
document.querySelector('.location__map').classList.remove('location__map--no-js');
document.querySelector('.main-nav__list').classList.remove('main-nav__list--no-js');
document.querySelector('.main-header__nav').classList.remove('main-header__nav--no-js');
document.querySelector('.main-header__inner').classList.remove('main-header__inner--no-js');
document.querySelector('.main-header__logo-image').classList.remove('main-header__logo-image--no-js');
document.querySelector('.main-header__logo-text').classList.remove('main-header__logo-text--no-js');

/* Открытие-закрытие меню навигации*/
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.main-nav__toggle');
  const navList = document.querySelector('.main-nav__list');

  toggleButton.addEventListener('click', () => {
    navList.classList.toggle('main-nav__list--open');
    toggleButton.classList.toggle('main-nav__toggle--close');
  });

  document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !toggleButton.contains(e.target) && navList.classList.contains('main-nav__list--open')) {
      navList.classList.remove('main-nav__list--open');
      toggleButton.classList.remove('main-nav__toggle--close');
    }
  });
});

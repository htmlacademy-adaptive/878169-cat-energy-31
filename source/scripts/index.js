/* в этот файл добавляет скрипты*/

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

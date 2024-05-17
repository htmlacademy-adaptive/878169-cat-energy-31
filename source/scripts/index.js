/* в этот файл добавляет скрипты*/

/* Открытие-закрытие меню навигации*/
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.main-nav__toggle');
  const navList = document.querySelector('.main-nav__list');

  toggleButton.addEventListener('click', function() {
    navList.classList.toggle('main-nav__list--open');
  });

  document.addEventListener('click', function(e) {
    if (!navList.contains(e.target) && !toggleButton.contains(e.target) && navList.classList.contains('main-nav__list--open')) {
      navList.classList.remove('main-nav__list--open');
    }
  });
});

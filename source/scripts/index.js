/* в этот файл добавляет скрипты*/

/* Открытие-закрытие меню навигации*/
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.main-nav__toggle');
  const navList = document.querySelector('.main-nav__list');

  toggleButton.addEventListener('click', () => {
    navList.classList.toggle('main-nav__list--open');
  });

  document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !toggleButton.contains(e.target) && navList.classList.contains('main-nav__list--open')) {
      navList.classList.remove('main-nav__list--open');
    }
  });
});

/* Управление слайдером */
document.addEventListener('DOMContentLoaded', () => {
  const sliderBefore = document.querySelector('.slider__before');
  const rangeButton = document.querySelector('.slider__range-button');
  const slider = document.querySelector('.example__slider');
  let isDragging = false;

  function toPercentString(value) {
    return value + '%';
  }

  function moveSlider(position) {
    const sliderRect = slider.getBoundingClientRect();
    let newLeft = position - sliderRect.left;
    newLeft = Math.max(0, newLeft);
    newLeft = Math.min(newLeft, sliderRect.width);
    const posPercentage = (newLeft / sliderRect.width) * 100;
    sliderBefore.style.width = toPercentString(posPercentage);
    rangeButton.style.left = toPercentString(posPercentage);
  }

  rangeButton.addEventListener('mousedown', (event) => {
    event.preventDefault();
    isDragging = true;
  });

  rangeButton.addEventListener('touchstart', (event) => {
    event.preventDefault();
    isDragging = true;
  });

  document.addEventListener('mousemove', (event) => {
    if (isDragging) {
      moveSlider(event.clientX);
    }
  });

  document.addEventListener('touchmove', (event) => {
    if (isDragging) {
      event.preventDefault();
      moveSlider(event.touches[0].clientX);
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });
});

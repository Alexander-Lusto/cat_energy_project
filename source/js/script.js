var header = document.querySelector('.header');
var menu = header.querySelector('.header__nav');
var closeMenuButton = header.querySelector('.header__close-menu-btn');
var openMenuButton = header.querySelector('.header__open-menu-btn');

// если js загрузился, скрыть пункты меню
openMenuButton.classList.remove('visually-hidden');
closeMenuButton.classList.add('visually-hidden');
menu.classList.add('visually-hidden');

openMenuButton.addEventListener('click', function () {
  openMenuButton.classList.add('visually-hidden');
  closeMenuButton.classList.remove('visually-hidden');
  menu.classList.remove('visually-hidden');
});

closeMenuButton.addEventListener('click', function () {
  openMenuButton.classList.remove('visually-hidden');
  closeMenuButton.classList.add('visually-hidden');
  menu.classList.add('visually-hidden');
});

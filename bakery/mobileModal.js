const mobileMenu = document.querySelector('.mobileMenu');
const menuBtnOpen = document.querySelector('.menuBtnOpen');
const menuBtnClose = document.querySelector('.menuBtnClose');

const toggleMenu = () => mobileMenu.classList.toggle('isOpen');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);
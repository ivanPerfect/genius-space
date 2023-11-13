const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modalBtnOpen');
const modalBtnClose = document.querySelector('.modalBtnClose');

const toggleModal = () => modal.classList.toggle('isHidden');
modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click',toggleModal);
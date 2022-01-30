'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// loop thru nodelist of buttons
for (let i = 0; i < btnOpenModal.length; i++)
  // show modal on click each btn
  btnOpenModal[i].addEventListener('click', showModal);
// close modal on click btn
btnCloseModal.addEventListener('click', closeModal);
document;
//close on click outside of element
overlay.addEventListener('click', closeModal);

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

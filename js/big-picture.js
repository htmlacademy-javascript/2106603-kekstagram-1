import {isEscapeKey} from './util.js';
//отрисовка окна с полноразмерным изображением.
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('#picture-cancel');

const getSelectionPicture = (evt) => {
  if(evt.target.closest('.picture')){
    bigPicture.classList.remove('hidden');
  }
};

pictures.addEventListener('click', getSelectionPicture);

bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});

import {isEscapeKey} from './util.js';
//отрисовка окна с полноразмерным изображением.
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('#picture-cancel');

const openSelectionPicture = (event) => {
  if(event.target.closest('.picture')){
    bigPicture.classList.remove('hidden');

    document.addEventListener('keydown', (evt) => {
      if(isEscapeKey(evt)) {
        evt.preventDefault();
        bigPicture.classList.add('hidden');
      }
    });
  }
};

pictures.addEventListener('click', openSelectionPicture);

bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

import {isEscapeKey} from './util.js';
//отрисовка окна с полноразмерным изображением.
const galleryPictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('#picture-cancel');

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
};

const openSelectionPicture = (pictures) => {
  pictures.addEventListener('click', (evt) => {
    if(evt.target.closest('.picture')){
      bigPicture.classList.remove('hidden');

      document.addEventListener('keydown', onDocumentKeydown);
    }
  });
};

const closeBigPicture = (button) => {
  button.addEventListener('click', () => {
    bigPicture.classList.add('hidden');

    document.removeEventListener('keydown', onDocumentKeydown);
  });
};

openSelectionPicture(galleryPictures);

closeBigPicture(bigPictureCancel);

import {isEscapeKey} from './util.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.body;
const fieldSelectImg = document.querySelector('#upload-file');

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    imgUploadOverlay.classList.add('hidden');
  }
};
const showEditWindow = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};
fieldSelectImg.addEventListener('change', showEditWindow);

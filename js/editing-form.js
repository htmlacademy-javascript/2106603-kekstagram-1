import {isEscapeKey} from './util.js';
import './validate.js';
import {pristine} from './validate.js';

const uploadImgForm = document.querySelector('#upload-select-image');
const imgUploadOverlay = uploadImgForm.querySelector('.img-upload__overlay');
const body = document.body;
const fieldSelectImg = uploadImgForm.querySelector('#upload-file');
const imgUploadCancelButton = uploadImgForm.querySelector('#upload-cancel');

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

const imgUploadCancel = () => {
  uploadImgForm.reset();
  pristine.reset();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

fieldSelectImg.addEventListener('change', showEditWindow);
imgUploadCancelButton.addEventListener('click', imgUploadCancel);

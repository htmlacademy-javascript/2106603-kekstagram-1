import {isEscapeKey} from './util.js';
import './validate.js';
import {pristine} from './validate.js';
import {resetPreview} from './scaling.js';
import {resetEffects} from './effects.js';

const uploadImgForm = document.querySelector('#upload-select-image');
const imgUploadOverlay = uploadImgForm.querySelector('.img-upload__overlay');
const body = document.body;
const fieldSelectImg = uploadImgForm.querySelector('#upload-file');
const imgUploadCancelButton = uploadImgForm.querySelector('#upload-cancel');
const fieldHashtag = uploadImgForm.querySelector('.text__hashtags');
const fieldComment = uploadImgForm.querySelector('.text__description');

const isFocusField = () =>
  document.activeElement === fieldHashtag ||
  document.activeElement === fieldComment;

const showEditWindow = () => {
  resetPreview();
  resetEffects();
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

function onDocumentKeydown(evt) {
  if(isEscapeKey(evt) && !isFocusField()) {
    evt.preventDefault();
    imgUploadCancel();
  }
}

fieldSelectImg.addEventListener('change', showEditWindow);
imgUploadCancelButton.addEventListener('click', imgUploadCancel);
uploadImgForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

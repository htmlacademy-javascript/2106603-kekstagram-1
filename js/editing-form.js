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
const submitButton = uploadImgForm.querySelector('#upload-submit');
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const isFocusField = () =>
  document.activeElement === fieldHashtag ||
  document.activeElement === fieldComment;

const onShowEditWindow = () => {
  resetPreview();
  resetEffects();
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const onImgUploadCancel = () => {
  uploadImgForm.reset();
  pristine.reset();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if(isEscapeKey(evt) && !isFocusField()) {
    evt.preventDefault();
    onImgUploadCancel();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

fieldSelectImg.addEventListener('change', onShowEditWindow);
imgUploadCancelButton.addEventListener('click', onImgUploadCancel);

const setImgFormSubmit = (onSuccess) => {
  uploadImgForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      const formData = new FormData(evt.target);
      await onSuccess(formData);
      unblockSubmitButton();
    }
  });
};

export {setImgFormSubmit, onImgUploadCancel};

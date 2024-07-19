import {isEscapeKey} from './util.js';
import './validate.js';
import {pristine} from './validate.js';
import {resetPreview} from './scaling.js';
import {resetEffects} from './effects.js';
import {showMessage} from './message-form.js';
import { sendData } from './api.js';

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

let prefix;

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

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

fieldSelectImg.addEventListener('change', showEditWindow);
imgUploadCancelButton.addEventListener('click', imgUploadCancel);

const setImgFormSubmit = (onSuccess) => {
  uploadImgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      const formData = new FormData(evt.target);
      sendData(formData)
        .then((response) => {
          if (response.ok) {
            onSuccess();
            prefix = 'success';
            showMessage(prefix);
          } else {
            prefix = 'error';
            showMessage(prefix);
          }
        })
        .catch(() => {
          prefix = 'error';
          showMessage(prefix);
        })
        .finally(unblockSubmitButton);
    }
  });
};

export {setImgFormSubmit, imgUploadCancel};

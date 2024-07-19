import {isEscapeKey} from './util.js';

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    if(document.querySelector('.success')){
      document.querySelector('.success').remove();
    } else {
      document.querySelector('.error').remove();
    }
  }
};

const showMessage = (prefix) => {
  const messageModal = document.querySelector(`#${prefix}`).content.querySelector(`.${prefix}`);
  const message = messageModal.cloneNode(true);
  document.body.appendChild(message);
  document.addEventListener('keydown', onDocumentKeydown);

  const button = document.querySelector(`.${prefix}__button`);
  button.addEventListener('click', () => {
    document.querySelector(`.${prefix}`).remove();
  });
  document.addEventListener('click', (evt) => {
    if (evt.target === document.querySelector(`.${prefix}`)){
      document.querySelector(`.${prefix}`).remove();
    }
  });
};

const closeMessage = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
};

export {showMessage, closeMessage};

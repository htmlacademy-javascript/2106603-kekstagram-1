import {isEscapeKey} from './util.js';

const showMessage = (prefix) => {
  const messageModal = document.querySelector(`#${prefix}`).content.querySelector(`.${prefix}`);
  const message = messageModal.cloneNode(true);
  document.body.appendChild(message);

  const onDocumentKeydown = (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      document.querySelector(`.${prefix}`).remove();
    }
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  document.addEventListener('keydown', onDocumentKeydown);

  const onDocumentClick = (evt) => {
    if (evt.target === document.querySelector(`.${prefix}`)){
      document.querySelector(`.${prefix}`).remove();
    }
    document.removeEventListener('click', onDocumentClick);
  };
  document.addEventListener('click',onDocumentClick);

  const button = document.querySelector(`.${prefix}__button`);
  button.addEventListener('click', () => {
    document.querySelector(`.${prefix}`).remove();
  });
};

export {showMessage};
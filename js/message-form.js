import {isEscapeKey} from './util.js';

const showMessage = (prefix) => {
  const messageModal = document.querySelector(`#${prefix}`).content.querySelector(`.${prefix}`);
  const message = messageModal.cloneNode(true);
  document.body.appendChild(message);

  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      message.remove();
    }
  });

  const button = message.querySelector(`.${prefix}__button`);
  button.addEventListener('click', () => {
    message.remove();
  });
  document.removeEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      message.remove();
    }
  });
  document.addEventListener('click', () => {
    message.remove();
  });
};
export {showMessage};

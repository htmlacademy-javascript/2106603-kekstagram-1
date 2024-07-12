import {displayUserPictures} from './gallery.js';
import {openSelectionPicture} from './big-picture.js';
import {setImgFormSubmit, imgUploadCancel} from './editing-form.js';
import './effects.js';

fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((picture) => {
    displayUserPictures(picture);
    openSelectionPicture(picture);
  });

setImgFormSubmit(imgUploadCancel);

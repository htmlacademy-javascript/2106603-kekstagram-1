import {displayUserPictures} from './gallery.js';
import {openSelectionPicture} from './big-picture.js';
import {setImgFormSubmit, imgUploadCancel} from './editing-form.js';
import './effects.js';
import {getData} from './api.js';

getData()
  .then((picture) => {
    displayUserPictures(picture);
    openSelectionPicture(picture);
  });

setImgFormSubmit(imgUploadCancel);

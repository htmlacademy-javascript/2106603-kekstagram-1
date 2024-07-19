import {displayUserPictures} from './gallery.js';
import {openSelectionPicture} from './big-picture.js';
import {setImgFormSubmit, imgUploadCancel} from './editing-form.js';
import './effects.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

getData()
  .then((picture) => {
    displayUserPictures(picture);
    openSelectionPicture(picture);
  })
  .catch((err) => showAlert(err.message));

setImgFormSubmit(imgUploadCancel);

import {displayUserPictures} from './gallery.js';
import {openSelectionPicture} from './big-picture.js';
import './editing-form.js';
import './effects.js';

//const photos = getListPhotos();
//displayUserPictures(photos);
//openSelectionPicture(photos);
fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((picture) => {
    displayUserPictures(picture);
    openSelectionPicture(picture);
  });

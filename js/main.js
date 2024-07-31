import {displayUserPictures} from './gallery.js';
import {openSelectionPicture} from './big-picture.js';
import {setImgFormSubmit, imgUploadCancel} from './editing-form.js';
import './effects.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

async function showGallery() {
  try {
    const picture = await getData();
    displayUserPictures(picture);
    openSelectionPicture(picture);
  } catch(err) {
    showAlert(err.message);
  }
}
/*getData()
  .then((picture) => {
    displayUserPictures(picture);
    openSelectionPicture(picture);
  })
  .catch((err) => showAlert(err.message));*/
showGallery();
setImgFormSubmit(imgUploadCancel);

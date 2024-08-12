import {displayUserPictures} from './gallery.js';
import {openSelectionPicture} from './big-picture.js';
import {setImgFormSubmit, imgUploadCancel} from './editing-form.js';
import './effects.js';
import {getData, sendData} from './api.js';
import {showAlert} from './util.js';
import {showMessage} from './message-form.js';
import {filters} from './gallery-filters.js';

filters();
try {
  const picture = await getData();
  displayUserPictures(picture);
  openSelectionPicture(picture);
} catch(err) {
  showAlert(err.message);
}

setImgFormSubmit(async (data) => {
  try {
    await sendData(data);
    imgUploadCancel();
    showMessage('success');
  } catch {
    showMessage('error');
  }
});

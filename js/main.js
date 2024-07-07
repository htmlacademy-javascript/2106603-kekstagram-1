import {getListPhotos} from './data.js';
import {displayUserPictures} from './gallery.js';
import {openSelectionPicture} from './big-picture.js';
import './editing-form.js';
import './effects.js';

const photos = getListPhotos();
displayUserPictures(photos);
openSelectionPicture(photos);

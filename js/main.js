import {getListPhotos} from './data.js';
import {displayUserPictures} from './gallery.js';
import {openSelectionPicture} from './big-picture.js';
import './big-picture.js';
import './editing-form.js';

const photos = getListPhotos();
displayUserPictures(photos);
openSelectionPicture(photos);

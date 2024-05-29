import {getListPhotos} from './data.js';
import {displayUserPictures} from './gallery.js';
import {openSelectionPicture} from './big-picture.js';
import './big-picture.js';

displayUserPictures(getListPhotos());
openSelectionPicture(getListPhotos());

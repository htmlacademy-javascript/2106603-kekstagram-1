import {getListPhotos} from './data.js';
import {displayUserPictures} from './gallery.js';
import './big-picture.js';

displayUserPictures(getListPhotos());

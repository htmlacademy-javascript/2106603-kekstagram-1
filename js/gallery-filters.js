import {randomSelection, selectionByComments} from './util.js';
const RANDOM_IMG_COUNT = 10;
const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};
const filterContainer = document.querySelector('.img-filters');
const filtersButtons = [...document.querySelectorAll('.img-filters__button')];
let currentFilter = Filters.DEFAULT;
let pictures = [];

const getFilteredPictures = () => {
  switch (currentFilter) {
    case Filters.RANDOM:
      return randomSelection(pictures).slice(0, RANDOM_IMG_COUNT);
    case Filters.DISCUSSED:
      pictures
        .slice()
        .sort(selectionByComments);
      return pictures;
    default:
      return pictures.slice();
  }
};

const onFilterClick = (cb) => {
  filtersButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      if (!evt.target.classList.contains('img-filters__button')) {
        return;
      }
      const clickedButton = evt.target;
      if (clickedButton === currentFilter) {
        return;
      }
      filterContainer.querySelector('.img-filters__button.img-filters__button--active').classList.remove('img-filters__button--active');
      clickedButton.classList.add('img-filters__button--active');
      currentFilter = clickedButton.dispatchEvent;
      cb(getFilteredPictures());
    });
  });
};

const filteredImages = (images, cb) => {
  pictures = images;
  onFilterClick(cb);
};


export {filteredImages, getFilteredPictures};

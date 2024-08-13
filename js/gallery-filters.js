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

const filters = () => {
  filtersButtons.forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('.img-filters__button.img-filters__button--active').classList.remove('img-filters__button--active');
      button.classList.add('img-filters__button--active');
    });
  });
};



export {filters};

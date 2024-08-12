const filtersButtons = [...document.querySelectorAll('.img-filters__button')];

const filters = () => {
  filtersButtons.forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('.img-filters__button.img-filters__button--active').classList.remove('img-filters__button--active');
      button.classList.add('img-filters__button--active');
    });
  });
};

export {filters};

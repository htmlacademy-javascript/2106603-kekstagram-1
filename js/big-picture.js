//отрисовка окна с полноразмерным изображением.
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');

const getSelectionPicture = (evt) => {
  if(evt.target.closest('.picture')){
    bigPicture.classList.remove('hidden');
  }
};

pictures.addEventListener('click', getSelectionPicture);

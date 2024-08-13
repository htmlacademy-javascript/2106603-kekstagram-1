const userPictures = document.querySelector('.pictures');
const templateElement = document.querySelector('#picture')
  .content.querySelector('.picture');
const imgFilters = document.querySelector('.img-filters');
let currentPictures = [];

const createUserPicture = ({url, description, comments, likes, id}) => {
  const picture = templateElement.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.dataset.pictureId = id;

  return picture;
};

const displayUserPictures = (pictures) => {
  userPictures.querySelectorAll('.picture').forEach((element) => element.remove());
  imgFilters.classList.remove('img-filters--inactive');
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureUser = createUserPicture(picture);
    fragment.appendChild(pictureUser);
  });
  userPictures.appendChild(fragment);
};

const selectedGallery = (pictures) => {
  currentPictures = pictures;
  displayUserPictures(currentPictures);
};

export {selectedGallery};

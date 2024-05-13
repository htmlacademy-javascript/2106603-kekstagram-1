const userPictures = document.querySelector('.pictures');
const templateElement = document.querySelector('#picture')
  .content.querySelector('.picture');

const createUserPicture = ({url, description, comments, likes}) => {
  const picture = templateElement.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  return picture;
};

const displayUserPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureUser = createUserPicture(picture);
    fragment.appendChild(pictureUser);
  });
  userPictures.appendChild(fragment);
};

export {displayUserPictures};

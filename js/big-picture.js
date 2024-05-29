import {isEscapeKey} from './util.js';
//отрисовка окна с полноразмерным изображением.
const galleryPictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('#picture-cancel');
const body = document.body;
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
};

const insertPictureData = ({url, description, likes}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const insertCommentData = ({avatar, message, name}) => {
  bigPicture.querySelector('.social__picture').src = avatar;
  bigPicture.querySelector('.social__picture').alt = name;
  bigPicture.querySelector('.social__text').textContent = message;
};

const openBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  insertPictureData(data);
  insertCommentData(data.comments);
};

const openSelectionPicture = (pictures) => {
  galleryPictures.addEventListener('click', (evt) => {
    const minPicture = evt.target.closest('.picture');
    if(!minPicture){
      return;
    }
    console.log(pictures);
    const picture = pictures.find(
      (item) => item.id === Number(minPicture.dataset.pictureId)
    );
    openBigPicture(picture);
  });
};

const closeBigPicture = (button) => {
  button.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  });
};

//openSelectionPicture(galleryPictures);

closeBigPicture(bigPictureCancel);
export {openSelectionPicture};

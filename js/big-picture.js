import {isEscapeKey} from './util.js';

const COMMENT_PER_PORTION = 5;
//отрисовка окна с полноразмерным изображением.
const galleryPictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const bigPictureCancel = bigPicture.querySelector('#picture-cancel');
const body = document.body;
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
let comments = [];
let commentsShown = 0;

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

const insertPictureData = ({url, description, likes}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const insertCommentData = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');
  const imgComment = document.createElement('img');
  imgComment.classList.add('social__picture');
  const textComment = document.createElement('p');
  textComment.classList.add('social__text');

  comment.append(imgComment);
  comment.append(textComment);

  imgComment.setAttribute('src', avatar);
  imgComment.setAttribute('alt', name);
  textComment.textContent = message;
  return comment;
};

const renderComments = () => {
  commentsShown += COMMENT_PER_PORTION;
  if (commentsShown >= comments.length){
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = insertCommentData(comments[i]);
    fragment.append(commentElement);
  }
  socialComments.innerHTML = '';
  socialComments.append(fragment);
  commentCount.innerHTML = `${commentsShown} из <span class="comments-count"> ${comments.length}</span> комментариев`;
};

const commentsLoaderClick = () => {
  commentsLoader.addEventListener('click', () => renderComments());
};

const openBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  insertPictureData(data);
  comments = data.comments;
  commentsShown = 0;
  renderComments();
};

const openSelectionPicture = (pictures) => {
  galleryPictures.addEventListener('click', (evt) => {
    const minPicture = evt.target.closest('.picture');
    if(!minPicture){
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === Number(minPicture.dataset.pictureId)
    );
    openBigPicture(picture);
  });
};

const closeBigPicture = () => {
  bigPictureCancel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  });
};

closeBigPicture();
commentsLoaderClick();
export {openSelectionPicture};

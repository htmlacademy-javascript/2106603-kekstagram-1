const COMMENT_LENGTH = 140;
const VALIDATE_HASHTAGE = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_LENGTH_HASHTAGE = 5;
const uploadImgForm = document.querySelector('#upload-select-image');

const pristine = new Pristine(uploadImgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error'
});

//валидация хэштега
const isValidHashtag = (value) => {
  VALIDATE_HASHTAGE.test(value);
};

pristine.addValidator(
  uploadImgForm.querySelector('.text__hashtags'),
  isValidHashtag,
  'Неверное написание хэштега'
);

const validNumberHashtags = (value) => value.length <= MAX_LENGTH_HASHTAGE;

const validUniqueHashtag = (value) => {
  const lowerCaseHashtags = value.map((hashtag) => hashtag.toLowerCase());
  return lowerCaseHashtags.length === new Set(lowerCaseHashtags).size;
};

pristine.addValidator(
  uploadImgForm.querySelector('.text__hashtags'),
  validNumberHashtags,
  'Неболее 5 хэштегов'
);

pristine.addValidator(
  uploadImgForm.querySelector('.text__hashtags'),
  validUniqueHashtag,
  'Неуникальный хэштег'
);

const preparationHashtags = (value) => {
  const hashtags = value.trim().split('');
  pristine.validate(validNumberHashtags(hashtags));
  pristine.validate(validUniqueHashtag(hashtags));
  hashtags.every(isValidHashtag);
};

//валидация комментария

const validateComment = (value) => {
  if(value.length <= COMMENT_LENGTH) {
    return true;
  }
};

pristine.addValidator(
  uploadImgForm.querySelector('.text__description'),
  validateComment,
  `Небольше ${COMMENT_LENGTH} символов.`
);

export {pristine, preparationHashtags};

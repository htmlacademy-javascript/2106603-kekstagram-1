const COMMENT_LENGTH = 140;
const VALIDATE_HASHTAGE = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_LENGTH_HASHTAGE = 5;
const uploadImgForm = document.querySelector('#upload-select-image');
//const imputHashtag = uploadImgForm.querySelector('text__hashtags');

const pristine = new Pristine(uploadImgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error'
});

//валидация хэштега
const validNumberHashtags = (value) => value.length <= MAX_LENGTH_HASHTAGE;

const validUniqueHashtag = (value) => {
  const lowerCaseHashtags = value.map((hashtag) => hashtag.toLowerCase());
  const universalСollection = new Set(lowerCaseHashtags);
  return lowerCaseHashtags.length === universalСollection.size;
};

const preparationHashtags = (value) => {
  const hashtags = value.trim().split(' ');
  if(!validUniqueHashtag(hashtags)){
    return false;
  }
  if(!validNumberHashtags(hashtags)){
    return false;
  }
  return hashtags.every((hashtag) => VALIDATE_HASHTAGE.test(hashtag));
};

pristine.addValidator(
  uploadImgForm.querySelector('.text__hashtags'),
  preparationHashtags,
  'Хэштег не валиден'
);

//валидация комментария
const validateComment = (value) => {
  if(value.length <= COMMENT_LENGTH) {
    return true;
  }
};

pristine.addValidator(
  uploadImgForm.querySelector('.text__description'),
  validateComment,
  //`Небольше ${COMMENT_LENGTH} символов.`
  'Небольше 140 символов'
);

export {pristine};

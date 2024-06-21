const uploadImgForm = document.querySelector('#upload-select-image');
const pristine = new Pristine(uploadImgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error'
});
//валидация хэштега
const validateHashtags = (value) => {
  const hashtage = /^#[a-zа-яё0-9]{1,19}$/i;
  if(value === hashtage) {
    return true;
  }
};

pristine.addValidator(
  uploadImgForm.querySelector('.text__hashtags'),
  validateHashtags,
  'Ошибка'
);

//валидация комментария

const validateComment = (value) => {
  if(value.length <= 140) {
    return true;
  }
};

pristine.addValidator(
  uploadImgForm.querySelector('.text__description'),
  validateComment,
  'Небольше 140 символов'
);

export {pristine};

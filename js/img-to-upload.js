const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const uploadImgForm = document.querySelector('#upload-select-image');
const fieldSelectImg = uploadImgForm.querySelector('#upload-file');
const imgToUpload = uploadImgForm.querySelector('.img-upload__preview img');
const previews = [...uploadImgForm.querySelectorAll('.effects__preview')];

fieldSelectImg.addEventListener('change', () => {
  const file = fieldSelectImg.files[0];
  const fileName = file.name.toLowerCase();

  if (FILE_TYPES.some((end) => fileName.endsWith(end))) {
    const url = URL.createObjectURL(file);
    imgToUpload.src = url;
    previews.forEach((preview) => {
      preview.style.backgroundImage = `url(${url})`;
    });
  }
});

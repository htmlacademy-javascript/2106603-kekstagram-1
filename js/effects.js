const effectSlider = document.querySelector('.effect-level__slider');

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  connect: 'lower',
});

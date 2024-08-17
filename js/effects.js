const FILTERS = [
  {
    name: 'none',
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const NO_FILTER = FILTERS[0];
let chosenFilter = NO_FILTER;

const effectSlider = document.querySelector('.effect-level__slider');
const imgPreview = document.querySelector('.img-upload__preview img');
const filters = document.querySelector('.effects__list');
const containerEffectSlider = document.querySelector('.img-upload__effect-level');
const levelEffectSlider = document.querySelector('.effect-level__value');

const isOriginal = () => chosenFilter === NO_FILTER;

noUiSlider.create(effectSlider, {
  range: {
    min: NO_FILTER.min,
    max: NO_FILTER.max,
  },
  start: NO_FILTER.max,
  step: NO_FILTER.step,
  connect: 'lower',
});

//передаются обновленные настройки
const updateEffectSlider = () => {
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: chosenFilter.min,
      max: chosenFilter.max,
    },
    start: chosenFilter.max,
    step: chosenFilter.step,
    connect: 'lower',
  });

  if (isOriginal()) {
    containerEffectSlider.classList.add('hidden');
  } else {
    containerEffectSlider.classList.remove('hidden');
  }
};

//выбор и применение фильтра
const onFilterSelection = (evt) => {
  if (!evt.target.closest('.effects__item')){
    return;
  }
  chosenFilter = FILTERS.find((filter) => filter.name === evt.target.value);
  imgPreview.className = `effects__preview--${chosenFilter.name}`;
  updateEffectSlider();
};

//изменяем эффект фильтра при помощи ползунка слайдера
const onUpdateEffectViaSlider = () => {
  const valueSlider = effectSlider.noUiSlider.get();
  imgPreview.style.filter = isOriginal()
    ? NO_FILTER.filter
    : `${chosenFilter.filter}(${valueSlider}${chosenFilter.unit})`;
  levelEffectSlider.value = valueSlider;
};

const resetEffects = () => {
  chosenFilter = NO_FILTER;
  updateEffectSlider();
};

containerEffectSlider.classList.add('hidden');

filters.addEventListener('change', onFilterSelection);
effectSlider.noUiSlider.on('update', onUpdateEffectViaSlider);

export {resetEffects};

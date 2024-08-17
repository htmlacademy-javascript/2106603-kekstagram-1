const START_VALUE = 100;
const STEP_SCALE = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const valueScaleInput = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

const scalePreview = (value) => {
  imgPreview.style.transform = `scale(${value / 100})`;
  valueScaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(valueScaleInput.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if (newValue < MIN_VALUE){
    newValue = MIN_VALUE;
  }
  scalePreview(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(valueScaleInput.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > MAX_VALUE){
    newValue = MAX_VALUE;
  }
  scalePreview(newValue);
};

const resetPreview = () => {
  scalePreview(START_VALUE);
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);
export {resetPreview};

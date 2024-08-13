//Получение случайного целого числа в заданном интервале, включительно
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Поиск случайного элемента в переданном массиве.
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const getIdGenerator = () => {
  let lastCreatedId = 0;

  return () => {
    lastCreatedId += 1;
    return lastCreatedId;
  };
};

//Проверка, что клавиша Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

//сообщение об ошибки загрузки страницы
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 10000);
};

const randomSelection = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const selectionByComments = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {getRandomInteger, getRandomArrayElement, getIdGenerator, isEscapeKey, showAlert, randomSelection, selectionByComments, debounce};

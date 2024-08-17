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

//оптимизация кодп на основе сокращения вызовов функции
const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const randomSelection = (array) => {
  let j;
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const selectionByComments = (pictureA, pictureB) => {
  const B = pictureB.comments.length;
  const A = pictureA.comments.length;
  return B - A;
};

export {isEscapeKey, showAlert, debounce, randomSelection, selectionByComments};

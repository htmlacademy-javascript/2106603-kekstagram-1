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

export {getRandomInteger, getRandomArrayElement, getIdGenerator};

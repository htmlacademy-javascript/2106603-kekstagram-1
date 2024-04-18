const PHOTO_COUNT = 25;
const MIN_COUNT_LIKES = 15;
const MAX_COUNT_LIKES = 200;
const AVATARS_COUNT = 6;
const PHOTO_DESCRIPTIONS = [
  'Весна',
  'Лето на море',
  'Осень в Пушкине',
  'Русская зима',
  'Новогодний праздник',
  'Огни большого города',
  'Выставка художников-передвижников',
  'Соревнования по лыжам',
  'Любимые котики',
  'Русские святки',
  'Северное сияние за городом',
  'Банкет в ресторане',
  'Последний звонок в школе',
  'Парк развлечений',
  'Аквапарк',
  'Мягкие лапки',
  'Восход на Ладоге',
  'Закат на Фонтанке',
  'Михайловский замок',
  'Сирень на Марсовом поле',
  'Нева и белые ночи',
  'Ансамбль Смольного монастыря',
  'Стрелка Васильевского острова',
  'Парк в Приютино',
  'Плотина на Пороховых'
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Сергей',
  'Андрей',
  'Алексей',
  'Максим',
  'Евгений',
  'Иван',
  'София',
  'Анна',
  'Мария',
  'Ева',
  'Виктория',
  'Алиса'
];

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

const creatCommentId = getIdGenerator();

const creatMessage = () =>
  Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(COMMENTS)).join(' ');


const creatComment = () => ({
  id: creatCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
  message: creatMessage(),
  name: getRandomArrayElement(NAMES),
});

const getListComments = () => {
  const getCountComments = getRandomInteger(1, 10);
  const comments = Array.from({length: getCountComments}, creatComment);
  return comments;
};

const creatPhoto = (photoId) => ({
  id: photoId,
  url: `photos/${photoId}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(MIN_COUNT_LIKES, MAX_COUNT_LIKES),
  comments: getListComments(),
});

const getListPhotos = () =>
  Array.from({length: PHOTO_COUNT}, (_, photoId) => creatPhoto(photoId + 1));
  //Array.from({length: PHOTO_COUNT}).map((_, photoId) => creatPhoto(photoId + 1));

getListPhotos();

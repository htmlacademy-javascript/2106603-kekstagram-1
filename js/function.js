//Функция для проверки, является ли строка палиндромом.
function getPalindrome(objVerif) {
  let resultСhanges = '';
  for(let i = objVerif.length - 1; i >= 0; i--) {
    resultСhanges += objVerif.at(i);
  }
  return objVerif.toLowerCase().replaceAll(' ', '') === resultСhanges.toLowerCase().replaceAll(' ', '');
}
getPalindrome('Лёша на полке клопа нашёл ');

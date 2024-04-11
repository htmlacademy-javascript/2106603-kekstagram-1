//Функция для проверки, является ли строка палиндромом.
function getPalindrome(objVerif) {
  let resultСhanges = '';
  for(let i = objVerif.length - 1; i >= 0; i--) {
    resultСhanges += objVerif.at(i);
  }
  return objVerif.toLowerCase().replaceAll(' ', '') === resultСhanges.toLowerCase().replaceAll(' ', '');
}
getPalindrome('Лёша на полке клопа нашёл ');

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
function getNumber(objChoose) {
  let result = '';
  let base = objChoose;
  if (typeof base === 'number') {
    base = objChoose.toString();
  }
  result = Number(base.replace(/([^0-9])/gi, ''));
  if (typeof result !== 'number') {
    return NaN;
  }
  return result;
}
getNumber(1.5);

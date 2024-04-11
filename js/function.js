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

//Функция для формирования адресов файлов
function generatesFileAddresses(source, minLength, addPart) {
  let part = '';
  let result = '';
  if (source.length >= minLength) {
    return source;
  } else {
    const partLength = minLength - source.length;
    if(partLength % addPart.length && partLength > addPart.length) {
      const repeatPart = partLength / addPart.length;
      part = addPart.repeat(repeatPart);
      result = part.slice(0, partLength - addPart.length) + part + source;
      return result;
    }
    part = addPart.repeat(partLength);
    result = part.slice(0, partLength) + source;
    return result;
  }
}
generatesFileAddresses('1', 4, '0');

//Функция для проверки длины строки при валидации формы.
function checkLengthString (string, maxLength) {
  return string.length <= maxLength;
}
checkLengthString ('проверяемая строка', 20);

'use strict';

function reverse1(str) {
  return str
    .split('')
    .reverse()
    .join('')
}

function reverse2(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

function reverse3(str) {
  return str.split('').reduce((rev, char) => rev + char, '');
}

module.exports = {
  reverse1,
  reverse2,
  reverse3
};

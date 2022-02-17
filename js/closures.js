'use strict';

function createCalcFuntction(n) {
  return function () {
    console.log(1000 * n);
  };
}

// По сути это просто функция внутри другой функции
const calc = createCalcFuntction(42);
// Функиця createCalcFuntction() возвращает нам другую функцию, поэтому мы можем занести ее в переменную и затем вызвать

// Когда мы вызывали функцию createCalcFuntction(), то она отработала и вернула нам функицию, которая внутри нее. Но учитываю что внутрення фунция была вызвана в контексте функции createCalcFuntction(), переменная, которую принимает она принимает была замкнута в той функции, которую мы возвращаем. И поэтому всегда когда мы вызываем функцию calc(), в ней уже храниться значение n. Поэтому это и называется замыкание.

calc();

function createIncrementor(n) {
  return function (num) {
    return n + num;
  };
}

const addOne = createIncrementor(1); // Допустим мы хотим замкнуть переменную n на значении 1

const addTen = createIncrementor(10);

console.log(addOne(42));

console.log(addTen(40));

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator('com');

console.log(comUrl('google'));
console.log(comUrl('netflix'));




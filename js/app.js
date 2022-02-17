'use strict';

function createCalcFuntction(n) {
  return function () {
    console.log(1000 * n);
  };
}

// По сути это просто функция внутри другой функции
const calc = createCalcFuntction(42);
calc();
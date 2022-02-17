'use strict';

function hello() {
  console.log('Hello', this);
}

const person = {
  name: 'Dany',
  age: 17,
  sayHello: hello,
  sayHelloWindow: hello.bind(window), // bind.this
  logInfo: function (job, phone) {
    console.group(`${this.name} info: `);

    console.log(`Name is ${this.name}`); // тоже самое что и person.name, просто this делает код более универсальным
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

// Ключевое слово this указывает на тот объект, в контексте которого было вызвано
// С помощью bind() мы можеим передать тот контекст, который будет привязан к этой функции
// bind(this) === bind(window)

const lena = {
  name: 'Elena',
  age: 22,
};

person.logInfo.bind(lena)();
// Метод bind не вызывает функцию, а возвращает новую

const lenaInfoLog = person.logInfo.bind(lena);
lenaInfoLog('Frontend', '+380 95 783 62 73');

person.logInfo.call(lena, 'Frontend', '+380 95 783 62 73');
// call, в отличии от bind, сразу вызывает функцию

person.logInfo.apply(lena, ['Frontend', '+380 95 783 62 73']);
// а в apply нужно передавать данные в виде массива

// Practice

const array = [1, 2, 3, 4, 5];

// Потенциальный вопрос на собеседовании: как сделать так, чтобы у этого массива сразу же был метод, который позволяет сделать какое либо действие с каждым элементом массива (например: умножить на 2)

Array.prototype.multBy = function (n) {
  console.log('multBy', this);
  return this.map(function (i) {
    return i * n;
  });
};

// Мы обращаеся к прототипу родительского класса всех массивов, придумываем название метода (multBy) и присваеваем функцию,  затем мы вызываем у нужного массива этот метод

console.log(array.multBy(2));

// Теперь для того чтобы изменять элементы каждого массива нам не нужного вызывать отдельную функцию 
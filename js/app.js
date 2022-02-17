'use strict';

function hello() {
  console.log('Hello', this);
}

const person = {
    name: 'Dany',
    age: 17,
    sayHello: hello,
    sayHelloWindow:hello.bind(window)
}


// Ключевое слово this указывает на тот объект, в контексте которого было вызвано   
// С помощью bind() мы можеим передать тот контекстк, который будет привязан к этой функции
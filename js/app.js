'use strict';

console.log('Request data...');

const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Preparing data...');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working',
    };
    resolve(backendData); // Вызывая функцию resolve, мы говорим нашему промису, что он завершил свое выполнение
    // Чтобы получить доступ к backendData в методе then нужно просто передать ее в resolve
  }, 2000);
});

// Функция resolve вызывается тогда, когда была завершенна асинхронная операция, причем была завершенна успешно

// Сдесь параметр data = backendData
p.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
      //   Также можно использовать reject, что будет значить что операция была завершена не успешно
      //   reject(data);
    }, 2000);
  });

  //   p2.then((clientData) => {
  //     console.log('Data recieved', clientData);
  //   });
})
  .then((clientData) => {
    console.log('Data recieved', clientData);
    clientData.fromPromise = true;
    return clientData;
  })
  .then((data) => {
    console.log('Modified', data);
  })
  .catch((err) => {
    console.error('Error: ', err); // Метод catch для проверки ошибок
  })
  .finally(() => {
    console.log('Finally');
  }); // Метод finally будет вызываться независимо от состояния операции

// Подобная запись, как .then называеться чейнинг (чейнить)

// В методе then мы указываем какие что будет происходить когда промис будет выполнен, то есть сработает resolve

// Промисы лучше сеттаймаутов с колбэками тем, что у них меньше вложенность. Также можно проверять на наличие ошибок (например: сервер не ответил)

const sleep = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms),
  );
};

sleep(2000).then(() => {
  console.log('After 2 seconds');
});

// Promise.all сработает тогда, когда будут исполнены все промисы
Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('All promises');
});

// Promise.rece сработает тогда, когда выполнится первый промис в списке
Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log('Race promises');
});

const prom = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Looking for person');

    const person = {
      name: 'Margo',
      age: 31,
      job: 'Driver',
    };

    resolve(person);
  }, 2000);
});

prom.then((pers) => {
  setTimeout(() => {
    pers.hasDog = true;
    console.log('Person was found: ', pers);
  }, 3500);
});
    
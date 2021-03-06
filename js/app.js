const delay = (ms) => {
  return new Promise((r) =>
    setTimeout(() => {
      r();
    }, ms),
  );
};

delay(2000).then(() => {
  console.log('2 sec');
});

const url = 'https://jsonplaceholder.typicode.com/todos/1';

function fetchTODOs() {
  console.log('Fetch todo has been started');
  return delay(2000)
    .then(() => {
      return fetch(url);
      // fetch возвращает промис, поэтому мы можем использовать then
    })
    .then((response) => {
      response.json();
    });
}

fetchTODOs()
  .then((data) => {
    console.log('Data', data);
  })
  .catch((e) => {
    console.error(e);
  });

async function fetchAsyncTodos() {
  console.log('Fetch todo has been started');
  try {
    await delay(2000);
    const response = await fetch(url);
    // Тот результат, который попадает в метод then, мы можем просто получить переменную
    const data = await response.json();
    console.log('Data', data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Finally');
  }
}

fetchAsyncTodos();

// Те функции, которые внутри принимают await, должны быть асинхронными
// Мы знаем, что наша функция delay возвращает промис, но учитывая, что наша функция сейчас асинхронная, вместо того чтобы обрабатывать delay с помощью then, мы можем использовать await
// Следущей строчкой мы можем выполнять какую то логику, важный момент заключается в том, что мы не перейдем к этой строчке пока данный промис не зарезолвится (выполнится)

// async await это так называемый синтаксический сахар, который позволяет нам более удобно программировать какие то асинхронные вещи
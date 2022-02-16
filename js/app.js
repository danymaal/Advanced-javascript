'use strict';

({
  plugins: ['jsdom-quokka-plugin'],
});
// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// }

class Animal {
  static type = 'ANIMAL';
  // Статические переменные доступные только у самого класса

  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  voice() {
    console.log('I am Animal');
  }

  // Мы можем вызывать методы : animal.voice()
}

const animal = new Animal({
  name: 'Animal',
  age: 5,
  hasTail: true,
});

// Классы могут быть удобными потому что мы можем устраивать полноценное наследование (extendsd)

class Cat extends Animal {
  static type = 'CAT';

  constructor(options) {
    super(options);
    this.color = options.color;
  }

  // Когда мы реализовуем метод конструктор в дочернем классе, который наследуется от другого класса, мы для начала должны вызвать родительсикй конструктор. Ключевое слово super(то, что он принимает)

  voice() {
    super.voice();
    console.log('I am Cat');
  }
  // Мы можем переписывать методы родительского класса. Если в дочернем классе реализован какой-то метод, то он перетирает родительский метод.
  // Чтобы вызвать родительский метод нужно вначале написать super.voice()

  get ageInfo() {
    return this.age * 7;
  }

  set ageInfo(newAge) {
    this.age = newAge;
  }
  // В сеттере мы изменили поле this.age, а в геттере мы к нему обращаемся
}

/* Геттеры и Сеттеры 
    Это свойства-аксессоры (accessor properties).

    Свойства-аксессоры представлены методами: «геттер» – для чтения и «сеттер» – для записи. При литеральном объявлении объекта они обозначаются get и set

    Геттер срабатывает, когда obj.propName читается, сеттер – когда значение присваивается.


*/

const cat = new Cat({
  name: 'Cat',
  age: 7,
  hasTail: true,
  color: 'black',
});

// С помощью прототипированного наследования мы можем вызвать методы которые определенные в родительском классе

// Практическое применение

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    // Обычно через $ называются те переменные, которые содержат в себе какую-то дом ноду
  }

  hide() {
    this.$el.style.display = 'none';
  }

  show() {
    this.$el.style.display = 'block';
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);

    this.$el.style.width = this.$el.style.height = options.size;
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: '#box1',
  size: '100px',
  color: 'red',
});

// Теперь мы можем у этого бокса вызвать методы hide(), show()

const box2 = new Box({
  selector: '#box2',
  size: '130px',
  color: 'blue',
});

class Circle extends Box {
  constructor(options) {
    super(options);
    this.$el.style.borderRadius = '50%';
  }
}

const c = new Circle({
  selector: '#circle',
  size: '90px',
  color: 'green',
});

// Practice

class Text {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  green() {
    this.$el.style.color = 'green';
  }

  white() {
    this.$el.style.color = 'white';
  }
}

class TextBox extends Text {
  constructor(options) {
    super(options.selector);
  }
}

const text1 = new TextBox({
  selector: '.text1',
});

const text2 = new TextBox({
  selector: '.text2',
});

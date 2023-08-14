// Задание 2 (20минут)
// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.
// --------------
function Person(name, age) {
    // 1. В this = {}
    // 2. this.__proto__ = Person.prototype
    this.name = name;
    this.age = age;
    // this.introduce = function () {
    //     console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
    // };
    // return this
}
Person.prototype.introduce = function () {
    console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
};

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
//     }
// }
const person1 = new Person("John", 25);
console.log(person1);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

// https://www.youtube.com/watch?v=Su9Gml6xUUU
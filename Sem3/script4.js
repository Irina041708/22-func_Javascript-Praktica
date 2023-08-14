// Задание 4 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} издает звук.`);
    }
}

class Dog extends Animal {
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`Собака ${this.name} принесла мяч.`);
    }
}
const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // "Бобик издает звук."
console.log(dog1.breed); // "Дворняжка"
dog1.fetch(); // "Собака Бобик принесла мяч."
console.log(dog1);

// https://disk.yandex.ru/d/dNcHjZs3c96ypw

// Полный курс:
// 1 - https://www.youtube.com/watch?v=MbRmNGKXVOg
// 2 - https://www.youtube.com/watch?v=dUlEIwEDkV4
// 3 - https://www.youtube.com/watch?v=7qpbKy9XS48
// 4 - https://www.youtube.com/watch?v=Su9Gml6xUUU
// 5 - https://www.youtube.com/watch?v=lXJH1l9s214
// 6 - https://www.youtube.com/watch?v=qdyJkc-BjQA
// 7 - https://www.youtube.com/watch?v=fGTG-mrGpFY
// 8 - https://www.youtube.com/watch?v=lXbF_Jta6vQ
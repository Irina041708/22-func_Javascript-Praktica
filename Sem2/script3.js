// Задание 3 (call, apply 20 минут)
// 1. Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
// ----------------
const calculator = {
    add(num1, num2) {
        return num1 + num2;
    },
    subtract(num1, num2) {
        return num1 - num2;
    },
    multiply(num1, num2) {
        return num1 * num2;
    },
};

const animal = {
    name: 'animal',
    eat(v1, v2) {
        console.log(`${this.name} is eating`);
        console.log(v1, v2);
    },
};

const dog = {
    name: 'Rex',
    bark() {
        console.log(`${this.name} is barking`);
    },
    i: () => console.log(this),
};
animal.eat.call(dog, 5, 20);
animal.eat.apply(dog, [5, 20]);
dog.i();
const dogEatFunc = animal.eat.bind(dog);
dogEatFunc(5,20);

// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
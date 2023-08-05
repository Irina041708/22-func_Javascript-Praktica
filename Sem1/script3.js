// Задание 3 (Замыкания 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.
// ---------------------

function createCalculator(initialValue) {
    let value = initialValue;
    return {
        add(num) {
            value += num;
        },
        subtract(num) {
            value -= num;
        },
        getValue() {
            return value;
        },
    };
}

const calc = createCalculator(10);
calc.add(15);
calc.subtract(22);
console.log(calc.getValue());


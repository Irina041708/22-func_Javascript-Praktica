// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами:
//  increment и decrement. Метод increment должен увеличивать значение счетчика на 1,
//   а метод decrement должен уменьшать значение счетчика на 1.
//  Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
// --------------

function createCounter() {
    let counter = 0;
    return {
        increment() {
            counter++;
        },
        decrement() {
            counter--;
        },
        getValue() {
            return counter;
        },
    }
}
const calc = createCounter();//Присвоим в переменную этото объект.C Этим объектом можно выполнять три действия
calc.increment();
calc.increment();
calc.increment();
calc.increment();

calc.decrement();

// console.log(calc.increment());
// console.log(calc.decrement());
console.log(calc.getValue());
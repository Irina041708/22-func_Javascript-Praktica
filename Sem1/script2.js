// Задание 2 (Чистые функции 25минут)
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.
// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// --------
// const arr = [1, 2, 5, 6];
// function getEvenNumbers(arr) {
//     return arr.filter((num) => num % 2 === 0);
// }
// console.log(getEvenNumbers(arr));

// ----------
const arr = [1, 2, 5, 6];
function getEvenNumbers(arr) {
    return arr.reduce((acc, num) => acc + num, 0) / arr.length;
}
console.log(getEvenNumbers(arr));

// -----------


function capitalizeFirstLetter(string) {
    return string
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(capitalizeFirstLetter('Всем привет:))), людишки'));

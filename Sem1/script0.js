// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]
// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]
// --------------zad1---------------
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// function mergeArrays(arr1, arr2) {
//     const arr = [...arr1, ...arr2];
//     return arr;
// }
// console.log(mergeArrays(arr1, arr2));
// --------------zad2---------------
const arr = [1, 2, 3, 2, 4, 1, 5];
// function removeDuplicates(...rest) {
//     return rest.filter((num,i) => {
//         return rest.indexOf(num) === i; 
//     });
// }
function removeDuplicates(...rest) {
    return [...new Set(rest).values()];//Set вернет сразу без джубликатов,только это не массив_добавляем values
}
console.log(removeDuplicates(...arr));

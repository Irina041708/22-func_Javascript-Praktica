// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.
// ----------------
const arr = [];
function getPrototypeChain(obj) {
    const arrPrototype = [];
    for (let proto = Object.getPrototypeOf(obj); proto !== null; proto = Object.getPrototypeOf(proto)) { 
        arrPrototype.push(proto);    
    }
    return arrPrototype;
}
// console.log(getPrototypeChain(arr));
console.log(getPrototypeChain(document.body));
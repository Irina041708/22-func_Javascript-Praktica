// Напишите программу, которая загружает данные с сервера с
// использованием объекта XMLHttpRequest и отображает полученную
// информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url
// (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с
// помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который
// будет вызываться при изменении состояния запроса. Проверьте,
// если readyState равен 4 (успешно выполнен запрос) и status равен
// 200 (успешный статус ответа сервера), то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).
// Задание 2 продолжение
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
// запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send().
// 6. Выведите в консоль слово "привет", после вызова функции.
// Дополнительно:
// а) Откройте запрос с помощью xhr.open("GET", url, false), где "GET" - тип
// запроса, url - адрес сервера, false - асинхронный режим запроса. Посмотрите, 
// что изменится, объясните почему. Какой вариант чаще используется/лучше?
// б) Переписать на fetch с обработкой ошибок.

// API: https://jsonplaceholder.typicode.com/users
// ---------------
// function loadData(url) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             console.log(xhr.responseText);
//         }
//     };
//     xhr.open("GET", url, true);
//     xhr.send();
// }
// loadData(https://jsonplaceholder.typicode.com/users));

// async function loadData(url) {
//     try {
//         const resp = await fetch(url);
//         if (resp.ok) {
//             console.log(await resp.json());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// function loadData(url) {
//     fetch(url)
//         .then((resp) => {
//             if (resp.ok) {
//                 return resp.json();
//             }
//         })
//         .then(json => console.log(json))
//         .catch(error => console.log(error))
// }

function loadData(url) {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

loadData(`https://jsonplaceholder.typicode.com/users`);
console.log(`Привет`);


// https://pastebin.com/uYvgMkZb

// https://learn.javascript.ru/async

// https://learn.javascript.ru/network



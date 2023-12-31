// Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными
// о пользователе в качестве аргумента и использует fetch для отправки этих
// данных на удаленный сервер для сохранения. Функция должна возвращать промис,
//  который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *

// // Пример использования функции
// const user = {
//   "name": "John Doe",
//   "job": "unknown"
// };

// saveUserData(user)
//   .then(() => {
//     console.log('User data saved successfully');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// saveUserData использует fetch для отправки данных о пользователе на удаленный
//  сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием
//  типа содержимого application/json и сериализует объект с данными о пользователе в
//  JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция
//  разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

// https://yandex.ru/video/preview/2152898453077056790

const user = {
  name: "John Doe",
  job: "unknown",
};

async function saveUserData(data) {
  try {
    url = `https://reqres.in/api/users`;
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    if (resp.ok) {
      console.log("Данные успешно сохранены");
      const result = await resp.json();
      return result.data;
      // return await resp.json().then((res) => res.data);
    }
  } catch (error) {
    console.log(`${error.message}`);
  }
}
saveUserData(user);

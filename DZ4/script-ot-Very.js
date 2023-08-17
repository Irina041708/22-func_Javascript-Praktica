// 1. Должно быть так примерно:

// function getUserData(id) {
//   // другой url Для получения пользователя.
//   return fetch(https://reqres.in/api/users/${id}) 
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(wrong response status: ${response.status});
//       }
//       return response.json();
//     })
//     .then(json => json.data);
// }

// getUserData(3)
//   .then(result => console.log(result))
//   .catch(err => console.log(Ошибка: ${err.message}));
// Вроде такого должно быть:
// function saveUserData(userObject) {
//   return fetch(https://reqres.in/api/users, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(userObject),
//   }).then(resp => {
//     if (!resp.ok) {
//       throw new Error(Wrong status ${resp.status});
//     }
//   });
// }

// const user = {
//   name: "John Doe",
//   job: "unknown",
// };

// saveUserData(user)
//   .then(() => console.log("User data saved successfully"))
//   .catch(error => console.log(error.message));
// -------------------------------------
// function getUserData(ID) {
//     fetch('https://reqres.in/api/users')
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then(json => {
//             let result = json.data.filter(e => e.id === ID);
//             if (result.length < 1) {
//                 throw new Error('Пользователь не найден.');
//             }
//             console.log(result[0]);
//         })
//         .catch(error => console.log(error));
// }

// getUserData(2);
// --------------------------
// const user = {
//     name: "John Doe",
//     job: "unknown",
// };

// function saveUserData(user) {
//     fetch('https://reqres.in/api/users', {
//         method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
//         body: JSON.stringify(user), // Тело запроса в JSON-формате
//         headers: {
//             // Добавляем необходимые заголовки
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .then(() => {
//             console.log('User data saved successfully');
//         })
//         .catch(error => {
//             console.log(error.message);
//         });
// }
// saveUserData(user);
// -------------------------
// class Order {
//     constructor(orderNumber) {
//         this.orderNumber = orderNumber;
//     }
//     products = [];
//     addProduct(product) {
//         this.products.push(product);
//     }
//     getTotalPrice() {
//         return this.products.reduce((acc, number) => acc + number.price, 0);
//     }
// }

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const order = new Order(12345);

// const product1 = new Product("Phone", 500);
// order.addProduct(product1);

// const product2 = new Product("Headphones", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600
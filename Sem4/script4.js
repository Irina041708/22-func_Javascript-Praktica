// Необходимо получить список пользователей с сервера, отсортировать их
// в алфавитном порядке и вывести в тег ul (его необходимо создать в html) 
// на странице данный список пользователей.
// API: https://jsonplaceholder.typicode.com/users


function loadData(url) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.status === 200) {
            const users = xhr.response;
            const userNew = users.sort((a, b) => a.name.localeCompare(b.name)).map((user) => `<p>${user.name}</p>`)
            .join(``);
            document.querySelector(`.content`).innerHTML = userNew;
            console.log(userNew);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

loadData(`https://jsonplaceholder.typicode.com/users`);
console.log(`Привет`);
// У вас есть список задач, которые необходимо выполнить в определенном 
// порядке. Каждая задача должна быть выполнена через определенный 
// промежуток времени, заданный в миллисекундах. Вам необходимо написать
// функцию, которая принимает список задач и интервал времени, а затем
// выполняет каждую задачу через определенный промежуток времени.
// --------------

const tasks = [
    { name: 'task1', time: 1000 },
    { name: 'task2', time: 2000 },
    { name: 'task3', time: 3000 },
    { name: 'task4', time: 4000 },
    { name: 'task5', time: 5000 },
];

// function handler(tasks) {
//     for (let i = 0, time = 0; i < tasks.length; i++) {
//         setTimeout(() => console.log(`${tasks[i].name}`), time += tasks[i].time);
//     }
// }

function handler(tasks) {
    let i = 0;
    const fn = () => {
        console.log(`${tasks[i].name}`);
        i++;
        if (tasks[i]) {
            setTimeout(fn, tasks[i].time);
        }
    };
    setTimeout(fn, tasks[i].time);
}

handler(tasks);

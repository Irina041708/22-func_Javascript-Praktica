//доделай к восресенью!!!!!!!!!
// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой 
// элемент дерева DOM и название класса в качестве аргументов и 
// возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);
// ---------------

// В качестве результата getElementById возвращает объект класса
//  HTMLElement или значение null, если элемент не был найден.
//   Этот метод имеется только у объекта document.

const rootElement = document.getElementById('root');//в методе getElementById 
// в качестве аргумента указываем строку со 
// значением атрибута id и на выходе получаем ссылку на этот элемент.
console.log(rootElement);

// console.log(document.getElementById('root').getElementsByClassName('my-class')[0]);

function findElementByClass(rootElement, nameClass) {
    if (rootElement) {
        return document.getElementsByClassName(nameClass)[0];
    }
}

const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);


// ""Управление списком заказов""
// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
// ----------------------
// Пример использования класса
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order extends Product {
    constructor(orderNumber) {
        super(Product);
        this.orderNumber = orderNumber;
        this.products = [];
    }
    addProduct(Product) {
        this.products.push(Product);
        console.log(this.products);
    }
    getTotalPrice() {
        return this.products.map(element => element.price).reduce((a, b) => a + b, 0);
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600

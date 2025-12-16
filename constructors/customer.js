import { Order } from './order.js';

export class Customer {
    constructor(name) {
        this.name = name;
        this.orderHistory = [];
    }
    placeOrder(cart) {
        const order = new Order(cart);
        this.orderHistory.push(order);
        console.log(`Order placed by ${this.name}`);
    }
    printOrderHistory() {
        console.log(`Order History for ${this.name}:`);
        this.orderHistory.forEach((order, index) => {
            console.log(`Order ${index + 1}:`);
            order.printOrder();
        });
    }
}
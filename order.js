export class Order {
    orderdate = new Date();

    constructor(cart) {
        this.cart = cart;
    }
    printOrder() {
        console.log(`Order Date: ${this.orderdate}`);
        console.log(`Total Items: ${this.cart.totalItems}`);
        console.log(`Total Price: ${this.cart.calculateTotal()}`);
    }
}

class Product {

    constructor(id, title, price, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
    }

    describe(){
        return `${this.id} ${this.title} ${this.category} ${this.price}`;
    }

    discountedPrice(){
        return `${this.price} * 10`;
    }
}

const laptop = new Product(1, `Sülearvuti`, 999.99, `Elektroonika`);

console.log(laptop.describe());

console.log(Product.discountedPrice(laptop.price, 10));
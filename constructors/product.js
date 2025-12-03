export class Product {

    constructor(id, title, price, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
    }

    describe(){
        return `${this.id} ${this.title} ${this.category} ${this.price}`;
    }

    discountedPrice(discount){
        return this.price * discount;
    }
}

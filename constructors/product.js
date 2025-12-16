export class Product {

    constructor(id, title, price, category, description = '') {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.description = description;
    }

    describe(){
        return `${this.id} ${this.title} ${this.category} ${this.price} ${this.description}`;
    }

    discountedPrice(discount){
        return this.price * discount;
    }
}

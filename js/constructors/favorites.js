export class Favorites {
    constructor() {
        this.items = [];
    }

    addProduct(product) {
        const exists = this.items.find(item => item.id === product.id);
        if (!exists) {
            this.items.push(product);
        }
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    isFavorite(productId) {
        return this.items.some(item => item.id === productId);
    }

    get totalFavorites() {
        return this.items.length;
    }

    clearFavorites() {
        this.items = [];
    }
}

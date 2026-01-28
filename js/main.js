import { Product } from './constructors/product.js';
import { cart } from './constructors/cart.js';
import { Favorites } from './constructors/favorites.js';
import { Order } from './constructors/order.js';
import { Customer } from './constructors/customer.js';
import { displayAllProducts } from './views/allProductsView.js';
import { displayCartView } from './views/cartView.js';
import { displayFavoritesView } from './views/favoritesView.js';

const shoppingCart = new cart();
const favorites = new Favorites();

// Load products from JSON data
let products = [];

async function loadProducts() {
    try {
        const response = await fetch('../../products.json');
        const data = await response.json();
        products = data.products.map(item => 
            new Product(item.id, item.title, item.price, item.category, item.description)
        );
        console.log('Products loaded:', products);
        
        // Initialize display after loading data
        displayAllProducts(products, shoppingCart, favorites);
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Load data when page loads
loadProducts();

// Navigation setup
const homeLink = document.getElementById('home-link');
const cartLink = document.getElementById('cart-link');
const favoritesLink = document.getElementById('favorites-link');

homeLink?.addEventListener('click', (e) => {
    e.preventDefault();
    displayAllProducts(products, shoppingCart, favorites);
});

cartLink?.addEventListener('click', (e) => {
    e.preventDefault();
    displayCartView(shoppingCart);
});

favoritesLink?.addEventListener('click', (e) => {
    e.preventDefault();
    displayFavoritesView(favorites);
});

// Note: Clear Cart button is now in the cart view


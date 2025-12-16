import { Product } from './constructors/product.js';
import { cart } from './constructors/cart.js';
import { Order } from './constructors/order.js';
import { Customer } from './constructors/customer.js';
import { displayAllProducts } from './views/allProductsView.js';


const laptop = new Product(1, `Sülearvuti`, 999.99, `Elektroonika`, `A fast lightweight laptop for everyday use.`);

const discount = 0.9; // 10% allahindlus

console.log(laptop.describe());

console.log(laptop.discountedPrice(discount));

const shoppingCart = new cart();



console.log(shoppingCart.calculateTotal()); // Kokku hind

console.log(shoppingCart.totalItems); // Kokku tooteid ostukorvis

const customer = new Customer('Alice');

const order = new Order(shoppingCart); 

order.printOrder();

customer.placeOrder(shoppingCart);

customer.printOrderHistory();



const products = [laptop];
displayAllProducts(products, shoppingCart);
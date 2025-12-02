import { Product } from './product.js';
import { cart } from './cart.js';
import { Order } from './order.js';
import { Customer } from './customer.js';


const laptop = new Product(1, `Sülearvuti`, 999.99, `Elektroonika`);

const discount = 0.9; // 10% allahindlus

console.log(laptop.describe());

console.log(laptop.discountedPrice(discount));

const shoppingCart = new cart();

shoppingCart.addProduct(laptop, 2);

console.log(shoppingCart.calculateTotal()); // Kokku hind

console.log(shoppingCart.totalItems); // Kokku tooteid ostukorvis

const customer = new Customer('Alice');

const order = new Order(shoppingCart); 

order.printOrder();

customer.placeOrder(cart);

customer.printOrderHistory();
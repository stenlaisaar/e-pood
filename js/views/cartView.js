export const displayCartView = (shoppingCart) => {
    console.debug('displayCartView called');
    let container = document.getElementById('main-item-container');
    if (!container) container = document.querySelector('.main-item-container');
    if (!container) return console.error('Main item container not found');

    container.innerHTML = '';

    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-view-container');
    cartContainer.innerHTML = '<h2>Shopping Cart</h2>';

    if (!shoppingCart || !Array.isArray(shoppingCart.items) || shoppingCart.items.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.classList.add('empty-message');
        emptyMessage.textContent = 'Your cart is empty';
        cartContainer.appendChild(emptyMessage);
    } else {

        const table = document.createElement('table');
        table.classList.add('cart-table');
        
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
        `;
        table.appendChild(headerRow);

        // Table rows for each item
        shoppingCart.items.forEach((item, index) => {
            const row = document.createElement('tr');
            const product = item.product;
            const subtotal = (product.price * item.quantity).toFixed(2);
            
            row.innerHTML = `
                <td>${product.title}</td>
                <td>$${Number(product.price).toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${subtotal}</td>
                <td><button class="remove-btn" data-index="${index}">Remove</button></td>
            `;
            table.appendChild(row);
        });

        cartContainer.appendChild(table);

        const totalSection = document.createElement('div');
        totalSection.classList.add('cart-total-section');
        const total = shoppingCart.calculateTotal().toFixed(2);
        totalSection.innerHTML = `
            <h3>Total: $${total}</h3>
        `;
        cartContainer.appendChild(totalSection);

        // Clear Cart button
        const clearCartBtn = document.createElement('button');
        clearCartBtn.classList.add('clear-cart-btn');
        clearCartBtn.textContent = 'Clear Cart';
        
        // Checkout button
        const checkoutBtn = document.createElement('button');
        checkoutBtn.classList.add('checkout-btn');
        checkoutBtn.textContent = 'Proceed to Checkout';
        
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('cart-button-container');
        buttonContainer.appendChild(clearCartBtn);
        buttonContainer.appendChild(checkoutBtn);
        cartContainer.appendChild(buttonContainer);

        // Remove button event listeners
        const removeButtons = cartContainer.querySelectorAll('.remove-btn');
        removeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.getAttribute('data-index'));
                const productId = shoppingCart.items[index].product.id;
                shoppingCart.removeProduct(productId);
                
                // Update cart count
                const countEl = document.getElementById('cart-count');
                if (countEl) countEl.textContent = shoppingCart.totalItems;
                
                // Refresh the view
                displayCartView(shoppingCart);
            });
        });

        // Clear cart button event
        clearCartBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear your cart?')) {
                shoppingCart.clearCart();
                const countEl = document.getElementById('cart-count');
                if (countEl) countEl.textContent = 0;
                displayCartView(shoppingCart);
            }
        });

        // Checkout button event
        checkoutBtn.addEventListener('click', () => {
            alert('Thank you for your purchase!');
            shoppingCart.clearCart();
            const countEl = document.getElementById('cart-count');
            if (countEl) countEl.textContent = 0;
            displayCartView(shoppingCart);
        });
    }

    container.appendChild(cartContainer);
};

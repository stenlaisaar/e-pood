export const displayAllProducts = (products, shoppingCart) => {
    console.debug('displayAllProducts called with', products);
    let container = document.getElementById('main-item-container');
    if (!container) container = document.querySelector('.main-item-container');
    if (!container) return console.error('Main item container not found');

    container.innerHTML = "<h2>All Products</h2>";

    const outputEl = document.getElementById('output');

    if (outputEl) outputEl.textContent = '';

    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-grid');

    const updateCartCount = () => {
        const countEl = document.getElementById('cart-count');
        if (countEl && shoppingCart) countEl.textContent = shoppingCart.totalItems;
    };

    if (!Array.isArray(products) || products.length === 0) {
        const empty = document.createElement('p');
        empty.textContent = 'No products available.';
        productsContainer.appendChild(empty);
    } else {
        products.forEach((product) => {
            try {
                const productCard = document.createElement('div');
                productCard.classList.add('item-container');
                const imgSrc = product && product.image ? product.image : 'https://via.placeholder.com/300x200?text=Product';
                    const price = Number(product && product.price) || 0;
                    productCard.innerHTML = `
                        <div class="item-text">
                            <h3>${product && product.title}</h3>
                            <p class="category">${(product && product.category) || ''}</p>
                            <p class="description">${(product && product.description) || ''}</p>
                            <p class="price">Price: $${price.toFixed(2)}</p>
                        </div>
                    `;

                const cartButton = document.createElement('button');
                cartButton.textContent = "Add to Cart";
                cartButton.addEventListener('click', () => {
                    if (!shoppingCart) return console.warn('No shopping cart provided');
                    shoppingCart.addProduct(product, 1);
                    updateCartCount();
                    cartButton.textContent = 'Added';
                    setTimeout(() => cartButton.textContent = 'Add to Cart', 700);
                });

                productCard.appendChild(cartButton);
                productsContainer.appendChild(productCard);
            } catch (err) {
                console.error('Error rendering product', err);
                const errEl = document.createElement('pre');
                errEl.textContent = (err && err.stack) || String(err);
                productsContainer.appendChild(errEl);
            }
        });
    }

    container.appendChild(productsContainer);

    if (shoppingCart) {
        const countEl = document.getElementById('cart-count');
        if (countEl) countEl.textContent = shoppingCart.totalItems;
    }
};
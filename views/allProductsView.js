export const displayAllProducts = (products) => {
    const container = document.getElementById(`main-item-container`);
    
    container.innerHTML = "<h2>All Products</h2>";
    
    const productsContainer = document.createElement('div');
    productsContainer.classList.add("products-container");

    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
        `;

        const cartButton = document.createElement('button');
        cartButton.textContent = "Add to Cart";

        productCard.appendChild(cartButton);
        productsContainer.append(productCard);
    });
};
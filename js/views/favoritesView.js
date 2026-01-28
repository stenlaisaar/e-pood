export const displayFavoritesView = (favorites) => {
    console.debug('displayFavoritesView called');
    let container = document.getElementById('main-item-container');
    if (!container) container = document.querySelector('.main-item-container');
    if (!container) return console.error('Main item container not found');

    container.innerHTML = '';

    const favoritesContainer = document.createElement('div');
    favoritesContainer.classList.add('favorites-view-container');
    favoritesContainer.innerHTML = '<h2>Favorites</h2>';

    if (!favorites || !Array.isArray(favorites.items) || favorites.items.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.classList.add('empty-message');
        emptyMessage.textContent = 'You have no favorite items yet';
        favoritesContainer.appendChild(emptyMessage);
    } else {
        const productsGrid = document.createElement('div');
        productsGrid.classList.add('products-grid');

        favorites.items.forEach((product) => {
            try {
                const productCard = document.createElement('div');
                productCard.classList.add('item-container');
                
                const price = Number(product.price) || 0;
                productCard.innerHTML = `
                    <div class="item-text">
                        <h3>${product.title}</h3>
                        <p class="category">${product.category || ''}</p>
                        <p class="description">${product.description || ''}</p>
                        <p class="price">Price: $${price.toFixed(2)}</p>
                    </div>
                `;

                const removeBtn = document.createElement('button');
                removeBtn.classList.add('remove-favorites-btn');
                removeBtn.textContent = 'Remove from Favorites';
                removeBtn.addEventListener('click', () => {
                    favorites.removeProduct(product.id);
                    
                    // Update favorites count
                    const countEl = document.getElementById('favorites-count');
                    if (countEl) countEl.textContent = favorites.totalFavorites;
                    
                    // Refresh the view
                    displayFavoritesView(favorites);
                });

                productCard.appendChild(removeBtn);
                productsGrid.appendChild(productCard);
            } catch (err) {
                console.error('Error rendering favorite product', err);
            }
        });

        favoritesContainer.appendChild(productsGrid);
    }

    container.appendChild(favoritesContainer);
};

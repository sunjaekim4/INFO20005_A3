class CartItems extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="cart-items">
            <hr>
            
            <div class="cart-item beef-bites">
                <img src="../images/product-images/beef-bites.webp" 
                alt="Beef Bites" class="product-image">

                <a class="cover-name-link" href="../products/beef-bites.html">
                    <h3>Beef Bites</h3>
                </a>

                <span class="price">$13.00</span>

                <span class="quantity-controls">
                    <button class="remove-item">-</button>
                    <p class="quantity">2</p>
                    <button class="add-item">+</button>
                </span>
                <img src="../images/delete-icon.png" alt="Delete Icon" class="delete-item">
            </div>

            <hr>

            <div class="cart-item chicken-feet">
                <img src="../images/product-images/chicken-feet.webp" 
                alt="Chicken Feet" class="product-image">

                <a class="cover-name-link" href="../products/chicken-feet.html">
                    <h3>Chicken Feet</h3>
                </a>

                <span class="price">$10.00</span>

                <span class="quantity-controls">
                    <button class="remove-item">-</button>
                    <p class="quantity">1</p>
                    <button class="add-item">+</button>
                </span>
                <img src="../images/delete-icon.png" alt="Delete Icon" class="delete-item">
            </div>

            <hr>

            <div class="cart-item bday-bone">
                <img src="../images/product-images/bday-bone.webp" 
                alt="B'Day Bone" class="product-image">

                <a class="cover-name-link" href="../products/bday-bone.html">
                    <h3>B'Day Bone</h3>
                </a>

                <span class="price">$8.50</span>

                <span class="quantity-controls">
                    <button class="remove-item">-</button>
                    <p class="quantity">1</p>
                    <button class="add-item">+</button>
                </span>
                <img src="../images/delete-icon.png" alt="Delete Icon" class="delete-item">
            </div>
            <hr>
        </div>



        <div class="cart-summary">
            <div class="summary-line">
                <b>Total Items:</b> <span class="total-items">4</span>
            </div>
            <div class="summary-line">
                <b>Total Price:</b> <span class="total-price">$44.50</span>
            </div>
        </div>
        `;
    }
}

customElements.define('cart-items', CartItems);
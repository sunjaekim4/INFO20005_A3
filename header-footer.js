class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav class="head-navbar">
                <a href="https://sunjaekim4.github.io/INFO20005_A3/">
                    <img class="header-logo-full" src="https://sunjaekim4.github.io/INFO20005_A3/images/farmhouse-full-logo.png" 
                        alt="Farmhouse Logo">
                </a>

                <ul class="head-nav-links">
                    <li class="head-nav-link home">
                        <a href="https://sunjaekim4.github.io/INFO20005_A3/index.html">Home</a>
                    </li>
            
                    <li class="head-nav-link shop">
                        
                        <input type="checkbox" id="shop-dropdown-active">
                        <label for="shop-dropdown-active">
                            <span class="head-checkbox">Shop</span>
                        </label>


                        <div class="head-dropdown shop">
                            <a href="https://sunjaekim4.github.io/INFO20005_A3/shop/shop-all.html">Shop All</a>
                            <a href="https://sunjaekim4.github.io/INFO20005_A3/shop/dog-treats.html">Dog Treats</a>
                            <a href="https://sunjaekim4.github.io/INFO20005_A3/shop/cat-treats.html">Cat Treats</a>
                            <a href="https://sunjaekim4.github.io/INFO20005_A3/shop/horses-herbivores.html">Horse & Herbivore Treats</a>
                            <a href="https://sunjaekim4.github.io/INFO20005_A3/shop/poultry-reptiles-natives.html">Poultry, Reptile & Natives Treats</a>
                        </div>
                    </li>

                    <li class="head-nav-link about-us">

                        <input type="checkbox" id="abt-dropdown-active">
                        <label for="abt-dropdown-active">
                            <span class="head-checkbox">About Us</span>
                        </label>

                        <div class="head-dropdown about-us">
                            <a href="https://sunjaekim4.github.io/INFO20005_A3/about-us/our-story.html">Our Story</a>
                            <a href="https://sunjaekim4.github.io/INFO20005_A3/about-us/our-ethics.html">Our Ethics</a>
                            <a href="https://sunjaekim4.github.io/INFO20005_A3/about-us/community.html">Community</a>
                            <a href="https://sunjaekim4.github.io/INFO20005_A3/about-us/where-to-buy.html">Where to Buy</a>
                        </div>
                    </li>

                </ul>

                <div class="cart-icon">
                    <a href="https://sunjaekim4.github.io/INFO20005_A3/cart.html">
                        <img class="cart-icon-img"
                        src="https://sunjaekim4.github.io/INFO20005_A3/images/cart.png" alt="Cart Icon">
                        <div class="total-items">0</div>
                    </a>
                </div>

            </nav>
        </header>
    `
  }
}

customElements.define('header-component', Header);

let boxes = document.querySelectorAll("input[type=checkbox]");
boxes.forEach(b => b.addEventListener("change", tick));
function tick(e) {
  let state = e.target.checked; // save state of changed checkbox
  boxes.forEach(b => b.checked = false); // clear all checkboxes
  e.target.checked = state; // restore state of changed checkbox
}


class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer>
        <nav class="footer-navbar">
            <ul class="foot-nav-links">
                <li>
                    <h2 class="foot-heading">Shop</h2>
                    <ul class="foot-links">
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/shop/shop-all.html">Shop All</a></li>
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/shop/dog-treats.html">Dog Treats</a></li>
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/shop/cat-treats.html">Cat Treats</a></li>
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/shop/horses-herbivores.html">Horse & Herbivore Treats</a></li>
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/shop/poultry-reptiles-natives.html">Poultry, Reptile & Natives Treats</a></li>
                    </ul>
                </li>

                <li>
                    <h2 class="foot-heading">About Us</h2>
                    <ul class="foot-links">
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/about-us/our-story.html">Our Story</a></li>
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/about-us/our-ethics.html">Our Ethics</a></li>
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/about-us/community.html">Community</a></li>
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/about-us/where-to-buy.html">Where to Buy</a></li>
                    </ul>
                </li>

                <li>
                    <h2 class="foot-heading">Helpful Links</h2>
                    <ul class="foot-links">
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/contact-us.html">Contact Us</a></li>
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/shipping-returns.html">Shipping & Returns</a></li>
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="https://sunjaekim4.github.io/INFO20005_A3/terms-conditions.html">Terms & Conditions</a></li>
                    </ul>
                </li>

                <li>
                    <h2 class="foot-heading">Socials</h2>
                    <ul class="foot-links">
                        <li><a href="https://www.facebook.com/farmhousepetproducts">Facebook</a></li>
                        <li><a href="https://www.instagram.com/farmhousepetproducts">Instagram</a></li>
                        <li><a href="https://www.tiktok.com/@farmhousepetproducts">TikTok</a></li>
                        <li><a href="https://www.youtube.com/@farmhousepetproducts">YouTube</a></li>
                    </ul>
                </li>
            </ul>
        </nav> 
    </footer>`
    }
}

customElements.define('footer-component', Footer);
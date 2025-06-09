

class Header extends HTMLElement {
  connectedCallback() {
    const base = window.location.pathname.includes('/shop/') || 
             window.location.pathname.includes('/about-us/') || 
             window.location.pathname.includes('/helpful-links/')
             ? '../' : './';

    this.innerHTML = `
        <header>
                <a href="${base}index.html" class="header-logo-link">
                    <img src="${base}images/farmhouse-full-logo.png" 
                        alt="Farmhouse Logo"
                        class="header-logo-img">
                </a>
                <nav>
                    <ul class="head-nav-links">
                        <li class="head-nav-link home">
                            <a href="${base}index.html">
                                <img class="paw-icon" src="${base}images/paw-icon-blue.png">
                                Home
                            </a>
                        </li>
                
                        <li class="head-nav-link shop">
                            
                            <input type="checkbox" id="shop-dropdown-active">
                            <label for="shop-dropdown-active" class="head-checkbox shop">
                                <img class="paw-icon" src="${base}images/paw-icon-blue.png">
                                <span>Shop</span>
                            </label>


                            <div class="head-dropdown shop">
                                <a href="${base}shop/shop-all.html">Shop All</a>
                                <a href="${base}shop/dog-treats.html">Dog Treats</a>
                                <a href="${base}shop/cat-treats.html">Cat Treats</a>
                                <a href="${base}shop/horses-herbivores.html">Horse & Herbivore Treats</a>
                                <a href="${base}shop/poultry-reptiles-natives.html">Poultry, Reptile & Natives Treats</a>
                            </div>
                        </li>

                        <li class="head-nav-link about-us">

                            <input type="checkbox" id="abt-dropdown-active">
                            <label for="abt-dropdown-active" class="head-checkbox about-us">
                                <img class="paw-icon" src="/images/paw-icon-blue.png">
                                <span>About Us</span>
                            </label>

                            <div class="head-dropdown about-us">
                                <a href="${base}about-us/our-story.html">Our Story</a>
                                <a href="${base}about-us/our-ethics.html">Our Ethics</a>
                                <a href="${base}about-us/community.html">Community</a>
                                <a href="${base}about-us/where-to-buy.html">Where to Buy</a>
                            </div>
                        </li>

                    </ul>
                </nav>

                <a href="${base}cart.html" class="cart-icon">
                    <img src="${base}images/cart.png" 
                        alt="Cart Icon"
                        class="cart-icon-img">
                </a>
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
        const base = window.location.pathname.includes('/shop/') || 
             window.location.pathname.includes('/about-us/') || 
             window.location.pathname.includes('/helpful-links/')
             ? '../' : './';
             
        this.innerHTML = `<footer>
        <nav class="footer-navbar">
            <ul class="foot-nav-links">
                <li>
                    <h2 class="foot-heading">Shop</h2>
                    <ul class="foot-links">
                        <li><a href="${base}shop/shop-all.html">Shop All</a></li>
                        <li><a href="${base}shop/dog-treats.html">Dog Treats</a></li>
                        <li><a href="${base}shop/cat-treats.html">Cat Treats</a></li>
                        <li><a href="${base}shop/horses-herbivores.html">Horse & Herbivore Treats</a></li>
                        <li><a href="${base}shop/poultry-reptiles-natives.html">Poultry, Reptile & Natives Treats</a></li>
                    </ul>
                </li>

                <li>
                    <h2 class="foot-heading">About Us</h2>
                    <ul class="foot-links">
                        <li><a href="${base}about-us/our-story.html">Our Story</a></li>
                        <li><a href="${base}about-us/our-ethics.html">Our Ethics</a></li>
                        <li><a href="${base}about-us/community.html">Community</a></li>
                        <li><a href="${base}about-us/where-to-buy.html">Where to Buy</a></li>
                    </ul>
                </li>

                <li>
                    <h2 class="foot-heading">Helpful Links</h2>
                    <ul class="foot-links">
                        <li><a href="${base}helpful-links/contact-us.html">Contact Us</a></li>
                        <li><a href="${base}helpful-links/shipping-returns.html">Shipping & Returns</a></li>
                        <li><a href="${base}helpful-links/privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="${base}helpful-links/terms-conditions.html">Terms & Conditions</a></li>
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
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav class="head-navbar">
                <a href="farmhousemain.html"><img class="header-logo" src="logo.png" alt="Farmhouse Logo"></a>
                <ul class="head-nav-links">
                    <li class="head-nav-link">
                        <a href="farmhousemain.html">Home</a>
                    </li>
            
                    <li class="head-nav-link shop">
                        <button class="head-button">Shop</button>
                        <ul class="head-dropdown">
                            <li><a href="shop/shop-all.html">Shop All</a></li>
                            <li><a href="shop/dog-treats.html">Dog Treats</a></li>
                            <li><a href="shop/cat-treats.html">Cat Treats</a></li>
                            <li><a href="shop/horses-herbivores.html">Horse & Herbivore Treats</a></li>
                            <li><a href="shop/poultry-reptiles-natives.html">Poultry, Reptile & Natives Treats</a></li>
                        </ul>
                    </li>

                    <li class="head-nav-link about-us">
                        <button class="head-button">About Us</button>
                        <ul class="head-dropdown">
                            <li><a href="about-us/our-story.html">Our Story</a></li>
                            <li><a href="about-us/our-mission.html">Our Mission</a></li>
                            <li><a href="about-us/our-ethics.html">Our Ethics</a></li>
                            <li><a href="about-us/community.html">Community</a></li>
                        </ul>
                    </li>

                </ul>

                <ul class="head-icon-links">
                    <li><a href="cart.html"><img src="cart-icon.png" alt="Cart Icon"></a></li>
                    <li><a href="search.html"><img src="search-icon.png" alt="Search Icon"></a></li>
                </ul>
            </nav>
        </header>
    `
  }
}

customElements.define('header-component', Header);

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer>
        <nav class="footer-navbar">
            <ul class="foot-nav-links">
                <li>
                    <h2 class="foot-heading">Shop</h2>
                    <ul class="foot-links">
                        <li><a href="shop/shop-all.html">Shop All</a></li>
                        <li><a href="shop/dog-treats.html">Dog Treats</a></li>
                        <li><a href="shop/cat-treats.html">Cat Treats</a></li>
                        <li><a href="shop/horses-herbivores.html">Horse & Herbivore Treats</a></li>
                        <li><a href="shop/poultry-reptiles-natives.html">Poultry, Reptile & Natives Treats</a></li>
                    </ul>
                </li>

                <li>
                    <h2 class="foot-heading">About Us</h2>
                    <ul class="foot-links">
                        <li><a href="about-us/our-story.html">Our Story</a></li>
                        <li><a href="about-us/our-mission.html">Our Mission</a></li>
                        <li><a href="about-us/our-ethics.html">Our Ethics</a></li>
                        <li><a href="about-us/community.html">Community</a></li>
                    </ul>
                </li>

                <li>
                    <h2 class="foot-heading">Helpful Links</h2>
                    <ul class="foot-links">
                        <li><a href="contact-us.html">Contact Us</a></li>
                        <li><a href="shipping-returns.html">Shipping & Returns</a></li>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                    </ul>
                </li>

                <li>
                    <h2 class="foot-heading">Socials</h2>
                    <ul class="foot-links">
                        <li><a href="https://www.facebook.com/farmhousepetproducts">Newsletter</a></li>
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
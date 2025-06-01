class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav class="head-navbar">
                <img class="header-logo" src="logo.png" alt="Farmhouse Logo">
                <ul class="nav-links">
                    <li class="nav-link">
                        <a href="farmhousemain.html">Home</a>
                    </li>
            
                    <li class="nav-link shop">
                        <h2>Shop</h2>
                        <ul class="dropdown">
                            <li><a href="shop/shop-all.html">Shop All</a></li>
                            <li><a href="shop/dog-treats.html">Dog Treats</a></li>
                            <li><a href="shop/cat-treats.html">Cat Treats</a></li>
                            <li><a href="shop/horses-herbivores.html">Horse & Herbivore Treats</a></li>
                            <li><a href="shop/poultry-reptiles-natives.html">Poultry, Reptile & Natives Treats</a></li>
                        </ul>
                    </li>

                    <li class="nav-link about-us">
                        <h2>About Us</h2>
                        <ul class="dropdown">
                            <li><a href="about-us/our-story.html">Our Story</a></li>
                            <li><a href="about-us/our-mission.html">Our Mission</a></li>
                            <li><a href="about-us/our-ethics.html">Our Ethics</a></li>
                            <li><a href="about-us/community.html">Community</a></li>
                        </ul>
                    </li>

                </ul>

                <ul class="icon-links">
                    <li><img src="cart-icon.png" alt="Cart Icon"></li>
                    <li><img src="search-icon.png" alt="Search Icon"></li>
                </ul>
            </nav>
        </header>
    `
  }
}

customElements.define('header-component', Header);
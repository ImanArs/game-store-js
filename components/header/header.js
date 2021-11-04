class Header {

    render(counter) {
        const html = `
            <div class="header__container">
                <nav class="nav">
                    <h3>Game Store</h3>
                    <div class="nav__basket">
                    <h3>
                    💩
                    </h3>
                    </div>
                    <div class="basket__radius">
                        <span>${counter}</span>
                    </div>
                </nav>
            </div>
        `
        ROOT_HEADER.innerHTML = html
    }
}

const headerPage = new Header()

const productsStore = localStorageUtil.getProducts()
headerPage.render(productsStore.length)
class Products {

    render() {
        let htmlCatalog = ''
        CATALOG.forEach(({ id, name, img, price}) => {
            htmlCatalog += `
                <li class="products__elements">
                    <img class="products__elements--img" src="${img}"/>
                    <h4 class="products__elements--name">${name}</h4>
                    <div class="products__elements--footer">
                        <p class="products__elements--price">${price.toLocaleString()} сом.</p>
                        <button class="products__elements--btn">в корзину</button>
                    </div>
                </li>
            `
        })
        const html = `
            <ul class="products__container">
                ${htmlCatalog}
            </ul>
        `
        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products()
productsPage.render()
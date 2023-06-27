class ProductManager {

    constructor() {
        this.product = []
    } 

    getProducts() {
        return this.products
    }

    addProduct({tittle, description, price, code, stock }) {
        const code = this.products.length + 1

        this.products.push({
            tittle,
            description,
            price,
            code,
            stock
        })
    }

    const t = new ProductManager()

    t.addProduct({
        tittle: 'Mouse Logitech',
        description: 'Mouse gamer color azul 5 botones Logitech',
        price: '$10500',
    })



}
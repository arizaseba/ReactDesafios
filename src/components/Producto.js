export default class Producto {
    constructor(id, title, color, stock, img, price) {
        this.id = id
        this.title = title
        this.color = color
        this.stock = stock
        this.img = img
        this.price = price
    }

    minStock(cantidad) {
        this.stock -= cantidad;
    }
}
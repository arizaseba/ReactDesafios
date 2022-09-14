export default class Producto {
    constructor(id, title, color, stock, img, price, desc) {
        this.id = id
        this.title = title
        this.color = color
        this.stock = stock
        this.img = img
        this.price = price
        this.desc = desc
    }

    minStock(cantidad) {
        this.stock -= cantidad;
    }
}
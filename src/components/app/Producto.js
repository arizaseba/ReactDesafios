export default class Producto {
    constructor(id, title, color, stock, img, price, desc, category) {
        this.id = id
        this.title = title
        this.color = color
        this.stock = stock
        this.img = img
        this.price = price
        this.desc = desc
        this.category = category
    }

    minStock(cantidad) {
        this.stock -= cantidad;
    }

    setCartCantidad(cantidad){
        this.cantidad = cantidad;
    }
}
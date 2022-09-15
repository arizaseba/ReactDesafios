import Producto from "./Producto";

const productList = [];
productList.push(new Producto(1, "Silla Gamer Weracer Mod Wemax", "Negro", 16, "/silla1.jpg", "38.000", "Mecanismo Basculante / Regulación de altura / Tela Ecocuero / Soporte asegurado de hasta 130kg / Almohadones Lumbares y Cabezal / Apoyabrazos Regulables / Ruedas de banda goma / Respaldo reclinable en 110 grados"));
productList.push(new Producto(2, "Silla Gamer Weracer Mod Wepower", "Blanco", 23, "/silla2.jpg", "49.200", "Mecanismo Basculante / Regulación de altura / Tela Ecocuero / Soporte asegurado de hasta 130kg / Almohadones Lumbares y Cabezal / Apoyabrazos Regulables / Ruedas de banda goma / Respaldo reclinable en 180 grados"));
productList.push(new Producto(3, "Silla Gamer Weracer Mod Wepower", "Rojo", 32, "/silla3.jpg", "55.000", "Mecanismo Basculante / Regulación de altura / Tela Ecocuero / Soporte asegurado de hasta 130kg / Almohadones Lumbares y Cabezal / Apoyabrazos Regulables / Ruedas de banda goma / Respaldo reclinable en 180 grados"));

export const getProducts = new Promise((resolve) =>
    setTimeout(() => {
        resolve(productList)
    }, 1500)
);

export const getItem = (id) => {
    return productList.find(i => i.id === id);
}

const cartList = [];

export const getCartList = new Promise((resolve) =>
    setTimeout(() => {
        resolve(cartList)
    }, 1500)
);

export const addToCart = item => {
    let prod = new Producto(item.id, item.title, item.color, item.stock, item.img, item.price);
    cartList.push(prod)
    document.getElementById("cart_count").innerHTML = cartList.length;
    console.log("cartList: ", cartList);
};
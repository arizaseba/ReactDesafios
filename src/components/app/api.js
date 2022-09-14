import Producto from "./Producto";

const productList = [];
productList.push(new Producto(1, "Silla Gamer Weracer Mod Wemax", "Negro", 16, "silla1.jpg", "38.000", "Mecanismo Basculante / Regulación de altura / Tela Ecocuero / Soporte asegurado de hasta 130kg / Almohadones Lumbares y Cabezal / Apoyabrazos Regulables / Ruedas de banda goma / Respaldo reclinable en 110 grados"));
productList.push(new Producto(2, "Silla Gamer Weracer Mod Wepower", "Blanco", 23, "silla2.jpg", "49.200", "Mecanismo Basculante / Regulación de altura / Tela Ecocuero / Soporte asegurado de hasta 130kg / Almohadones Lumbares y Cabezal / Apoyabrazos Regulables / Ruedas de banda goma / Respaldo reclinable en 180 grados"));
productList.push(new Producto(3, "Silla Gamer Weracer Mod Wepower", "Rojo", 32, "silla3.jpg", "55.000", "Mecanismo Basculante / Regulación de altura / Tela Ecocuero / Soporte asegurado de hasta 130kg / Almohadones Lumbares y Cabezal / Apoyabrazos Regulables / Ruedas de banda goma / Respaldo reclinable en 180 grados"));
console.log("productList: ", productList);

export const getProducts = () => {
    return productList;
}

export const getItem = (id) => {
    return productList.find(i => i.id === id);
}
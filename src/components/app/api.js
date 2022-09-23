import Producto from "./Producto";
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, where } from "firebase/firestore";
import { db } from './firebase';

const productList = [];
productList.push(new Producto(
    1, "Silla Gamer Weracer Wemax", "Negro", 16,
    [
        {
            src: "/img/gamer/weracer-wemax/weracer-wemax_1.jpg",
            alt: "weracer-wemax"
        },
        {
            src: "/img/gamer/weracer-wemax/weracer-wemax_2.jpg",
            alt: "weracer-wemax"
        },
        {
            src: "/img/gamer/weracer-wemax/weracer-wemax_3.jpg",
            alt: "weracer-wemax"
        },
        {
            src: "/img/gamer/weracer-wemax/weracer-wemax_4.jpg",
            alt: "weracer-wemax"
        },
    ], 38000,
    [
        "Mecanismo Basculante",
        "Regulación de altura",
        "Tela Ecocuero",
        "Soporte asegurado de hasta 130kg",
        "Almohadones Lumbares y Cabezal",
        "Apoyabrazos Regulables",
        "Ruedas de banda goma",
        "Respaldo reclinable en 110 grados"
    ], "Gamer")
);
productList.push(new Producto(
    2, "Silla Weracer Wepower", "Negro", 17,
    [
        {
            src: "/img/gamer/weracer-wepower/weracer-wepower_1.jpg",
            alt: "weracer-wepower"
        },
        {
            src: "/img/gamer/weracer-wepower/weracer-wepower_2.jpg",
            alt: "weracer-wepower"
        },
        {
            src: "/img/gamer/weracer-wepower/weracer-wepower_3.jpg",
            alt: "weracer-wepower"
        },
        {
            src: "/img/gamer/weracer-wepower/weracer-wepower_4.jpg",
            alt: "weracer-wepower"
        },
    ], 49200,
    [
        "Mecanismo basculante",
        "Regulación de altura",
        "Tela ecocuero",
        "Soporte asegurado de hasta 130kg",
        "Almohadones lumbares y cabezal",
        "Apoyabrazos regulables",
        "Ruedas de banda goma",
        "Respaldo reclinable en 180 grados"
    ], "Gamer")
);
productList.push(new Producto(
    3, "Silla Weracer Wepower Blanca", "Blanco", 13,
    [
        {
            src: "/img/gamer/weracer-wepower-blanca/weracer-wepower-blanca_1.jpg",
            alt: "weracer-wepower-blanca"
        },
        {
            src: "/img/gamer/weracer-wepower-blanca/weracer-wepower-blanca_2.jpg",
            alt: "weracer-wepower-blanca"
        },
        {
            src: "/img/gamer/weracer-wepower-blanca/weracer-wepower-blanca_3.jpg",
            alt: "weracer-wepower-blanca"
        },
        {
            src: "/img/gamer/weracer-wepower-blanca/weracer-wepower-blanca_4.jpg",
            alt: "weracer-wepower-blanca"
        },
    ], 49200,
    [
        "Mecanismo basculante",
        "Regulación de altura",
        "Tela ecocuero",
        "Soporte asegurado de hasta 130kg",
        "Almohadones lumbares y cabezal",
        "Apoyabrazos regulables",
        "Ruedas de banda goma",
        "Respaldo reclinable en 180 grados"
    ], "Gamer")
);
productList.push(new Producto(
    4, "Silla Weracer Wepower Roja", "Rojo", 21,
    [
        {
            src: "/img/gamer/weracer-wepower-roja/weracer-wepower-roja_1.jpg",
            alt: "weracer-wepower-roja"
        },
        {
            src: "/img/gamer/weracer-wepower-roja/weracer-wepower-roja_2.jpg",
            alt: "weracer-wepower-roja"
        },
        {
            src: "/img/gamer/weracer-wepower-roja/weracer-wepower-roja_3.jpg",
            alt: "weracer-wepower-roja"
        },
        {
            src: "/img/gamer/weracer-wepower-roja/weracer-wepower-roja_4.jpg",
            alt: "weracer-wepower-roja"
        },
    ], 49200,
    [
        "Mecanismo basculante",
        "Regulación de altura",
        "Tela ecocuero",
        "Soporte asegurado de hasta 130kg",
        "Almohadones lumbares y cabezal",
        "Apoyabrazos regulables",
        "Ruedas de banda goma",
        "Respaldo reclinable en 180 grados"
    ], "Gamer")
);
productList.push(new Producto(
    5, "Silla Amadeo Cromado C/Apoyacabezas C/Brazos", "Blanco", 50,
    [
        {
            src: "/img/office/amadeo-synchron/amadeo-synchron_1.jpg",
            alt: "amadeo-synchron"
        },
        {
            src: "/img/office/amadeo-synchron/amadeo-synchron_2.jpg",
            alt: "amadeo-synchron"
        },
        {
            src: "/img/office/amadeo-synchron/amadeo-synchron_3.jpg",
            alt: "amadeo-synchron"
        },
        {
            src: "/img/office/amadeo-synchron/amadeo-synchron_4.jpg",
            alt: "amadeo-synchron"
        },
    ], 64546,
    [
        "Base giratoria 5 ramas metálicas cromadas",
        "Mecanismo basculante synchron antishock de 5 posiciones",
        "Regulación tensión basculante",
        "Regulación neumática de altura",
        "Respaldo red color a elección con apoyo lumbar",
        "Apoyabrazos cromados con terminación nylon",
        "Apoyacabezas tapizado",
        "Opcional: sin apoyacabezas"
    ], "Office")
);
productList.push(new Producto(
    6, "Silla Dina Alta C/Brazos", "Negro", 5,
    [
        {
            src: "/img/office/dina-alta/dina-alta_1.jpg",
            alt: "dina-alta"
        },
        {
            src: "/img/office/dina-alta/dina-alta_2.jpg",
            alt: "dina-alta"
        },
        {
            src: "/img/office/dina-alta/dina-alta_3.jpg",
            alt: "dina-alta"
        },
        {
            src: "/img/office/dina-alta/dina-alta_4.jpg",
            alt: "dina-alta"
        },
    ], 48271,
    [
        "Base giratoria tipo araña de 5 ramas nylon",
        "Mecanismo basculante con regulación de tensión y traba multiples posiciones synchro",
        "Regulación neumática de altura",
        "Respaldo red",
        "Asiento tapizado sobre espuma de poliuretano inyectado",
        "Apoyabrazos metálicos pintados con terminación nylon"
    ], "Office")
);
productList.push(new Producto(
    7, "Silla Dina Alta Blanca Cromada C/Brazos", "Blanco", 10,
    [
        {
            src: "/img/office/dina-alta-blanca/dina-alta-blanca_1.jpg",
            alt: "dina-alta-blanca"
        },
        {
            src: "/img/office/dina-alta-blanca/dina-alta-blanca_2.jpg",
            alt: "dina-alta-blanca"
        },
        {
            src: "/img/office/dina-alta-blanca/dina-alta-blanca_3.jpg",
            alt: "dina-alta-blanca"
        },
        {
            src: "/img/office/dina-alta-blanca/dina-alta-blanca_4.jpg",
            alt: "dina-alta-blanca"
        },
    ], 62507,
    [
        "Base giratoria tipo araña de 5 ramas cromadas",
        "Mecanismo basculante con regulación de tensión y traba multiples posiciones synchro",
        "Regulación neumática de altura",
        "Respaldo red",
        "Asiento tapizado sobre espuma de poliuretano inyectado",
        "Apoyabrazos metálicos cromados con terminación nylon"
    ], "Office")
);
productList.push(new Producto(
    8, "Silla Sophia Widht Cromada", "Negro", 2,
    [
        {
            src: "/img/office/sophia-widht/sophia-widht_1.jpg",
            alt: "sophia-widht"
        },
        {
            src: "/img/office/sophia-widht/sophia-widht_2.jpg",
            alt: "sophia-widht"
        },
        {
            src: "/img/office/sophia-widht/sophia-widht_3.jpg",
            alt: "sophia-widht"
        },
        {
            src: "/img/office/sophia-widht/sophia-widht_4.jpg",
            alt: "sophia-widht"
        },
    ], 122772,
    [
        "Base giratoria tipo araña de 5 ramas cromada",
        "Soporta 220 kgs. Peso. Ancho asiento maximo mercado: 62 cms",
        "Ruedas banda de goma",
        "Mecanismo basculante con regulación de tensión y traba multiples posiciones synchro",
        "Regulación neumática de altura",
        "Asiento tapizado eco cuero negro sobre espuma de poliuretano inyectado, interior de madera",
        "Respaldo red color negro",
        "Apoyo lumbar regulable en ángulo y altura",
        "Apoyabrazos regulables nylon"
    ], "Office")
);


export const getProducts = new Promise((resolve) =>
    setTimeout(() => {
        resolve(productList)
        // console.log(productList)
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

export const addToCart = (item, cantidad) => {
    // id, title, color, stock, img, price, desc, category
    let prod = new Producto(item.id, item.title, item.color, item.stock, item.img, item.price, item.desc, item.category);
    let prodCart = cartList.find(s => s.id === item.id)
    if (prodCart) {
        prodCart.cantidad += cantidad
    }
    else {
        prod.cantidad = cantidad
        cartList.push(prod)
    }
    document.getElementById("cart_count").innerHTML = cartList.length;
    console.log("cartList: ", cartList);
};



//////////////// Firebase ////////////////
// CREATE ////////////////
export const createItem = async (obj) => {
    const colRef = collection(db, 'Productos');
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE ////////////////
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'Productos');
    await updateDoc(doc(colRef, id), obj)
}

// READ ////////////////
export const getItems = async () => {
    const colRef = collection(db, 'Productos');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE ////////////////
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCategory = async (value) => {
    const colRef = collection(db, 'Productos');
    const result = await getDocs(query(colRef, where('categoryId', '==', value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (id) => {
    const colRef = collection(db, 'Productos');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE ////////////////
export const deleteItem = async (id) => {
    const colRef = collection(db, 'Productos');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}
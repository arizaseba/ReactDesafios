import Producto from "./Producto";
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, where } from "firebase/firestore";
import { db } from './firebase';

const productList = [];
productList.push(new Producto(
    1, "Silla gamer Weracer Wemax", "Negro", 16,
    [
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wemax_1.jpg?alt=media&token=86e6cf38-356f-49f8-973f-fff525c3b87e",
            alt: "weracer-wemax"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wemax_2.jpg?alt=media&token=30deb54c-39a8-4256-beb1-d20f950971a8",
            alt: "weracer-wemax"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wemax_3.jpg?alt=media&token=cfcc37b7-3c4a-404d-bf11-ef79b034b58f",
            alt: "weracer-wemax"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wemax_4.jpg?alt=media&token=2bd383c4-a638-4f0e-a90e-468e1b107de3",
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
    ], "gamer")
);
productList.push(new Producto(
    2, "Silla Weracer Wepower", "Negro", 17,
    [
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wepower_1.jpg?alt=media&token=5884fe8f-30ba-4a37-9236-1ff7bbc03b48",
            alt: "weracer-wepower"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wepower_2.jpg?alt=media&token=89f9f524-685f-49cc-9d95-31db0a45d4c5",
            alt: "weracer-wepower"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wepower_3.jpg?alt=media&token=eab8a180-2f4f-40a9-be46-48e1371e5c05",
            alt: "weracer-wepower"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wepower_4.jpg?alt=media&token=ef5d3cf7-2a7a-47f8-8803-7fd8879ab52d",
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
    ], "gamer")
);
productList.push(new Producto(
    3, "Silla Weracer Wepower Blanca", "Blanco", 13,
    [
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wepower-blanca_1.jpg?alt=media&token=47bd66c7-174b-45b8-8a53-045656e44ae5",
            alt: "weracer-wepower-blanca"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wepower-blanca_2.jpg?alt=media&token=acd2aacb-ebd7-474a-b6eb-08fab08eeda9",
            alt: "weracer-wepower-blanca"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wepower-blanca_3.jpg?alt=media&token=549d4261-d298-421f-b7c8-6839e340b139",
            alt: "weracer-wepower-blanca"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wepower-blanca_4.jpg?alt=media&token=721123ad-bdae-4f6d-aa5d-54fe16e0bda6",
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
    ], "gamer")
);
productList.push(new Producto(
    4, "Silla Weracer Wepower Roja", "Rojo", 21,
    [
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wepower-roja_1.jpg?alt=media&token=58a24357-1a2f-4a0b-b5ff-3cc0703f3676",
            alt: "weracer-wepower-roja"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wepower-roja_2.jpg?alt=media&token=a937259e-4a38-42a9-9a89-6bc3d020ae38",
            alt: "weracer-wepower-roja"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wepower-roja_3.jpg?alt=media&token=8aae4426-5e8d-42b6-85ce-c7fc8322a56a",
            alt: "weracer-wepower-roja"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/weracer-wepower-roja_4.jpg?alt=media&token=48278c3e-ce5f-4baa-bbbd-854e0477b78c",
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
    ], "gamer")
);
productList.push(new Producto(
    5, "Silla Amadeo Cromado C/Apoyacabezas C/Brazos", "Blanco", 50,
    [
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/amadeo-synchron_1.jpg?alt=media&token=a21891c2-239d-4775-bbe6-e6406d10ce21",
            alt: "amadeo-synchron"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/amadeo-synchron_2.jpg?alt=media&token=bd6c65f7-5e57-4497-8af6-732cf1848cc6",
            alt: "amadeo-synchron"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/amadeo-synchron_3.jpg?alt=media&token=cabe639f-ee92-488c-bb39-3d76af06f0ea",
            alt: "amadeo-synchron"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/amadeo-synchron_4.jpg?alt=media&token=6c3ad441-6aa1-4dbf-8c37-63a86a6930b2",
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
    ], "office")
);
productList.push(new Producto(
    6, "Silla Dina Alta C/Brazos", "Negro", 5,
    [
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/dina-alta_1.jpg?alt=media&token=9b2423d6-3657-430c-8376-4f9d965170f6",
            alt: "dina-alta"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/dina-alta_2.jpg?alt=media&token=90b5a122-c8f6-42f7-b438-7cfa4dbf1770",
            alt: "dina-alta"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/dina-alta_3.jpg?alt=media&token=f1689b96-cd44-4f1c-832a-76edc811b9d5",
            alt: "dina-alta"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/dina-alta_4.jpg?alt=media&token=3b84a406-d2f8-4880-b39a-4fe0a0505e4c",
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
    ], "office")
);
productList.push(new Producto(
    7, "Silla Dina Alta Blanca Cromada C/Brazos", "Blanco", 10,
    [
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/dina-alta-blanca_1.jpg?alt=media&token=2cc5bbe8-65aa-41bc-8041-a7c9eaa0353e",
            alt: "dina-alta-blanca"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/dina-alta-blanca_2.jpg?alt=media&token=9c464c7a-3bff-4e38-8c33-68c070ae0b67",
            alt: "dina-alta-blanca"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/dina-alta-blanca_3.jpg?alt=media&token=7877f0d0-5cbf-4f51-ba7e-75ab24b647bb",
            alt: "dina-alta-blanca"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/dina-alta-blanca_4.jpg?alt=media&token=1ec060a2-6017-4e44-8f90-d912ce5e87eb",
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
    ], "office")
);
productList.push(new Producto(
    8, "Silla Sophia Widht Cromada", "Negro", 2,
    [
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/sophia-widht_1.jpg?alt=media&token=3a4f3e4b-8cf9-4cbc-8c08-e297245ca213",
            alt: "sophia-widht"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/sophia-widht_2.jpg?alt=media&token=c753cfaf-e6f9-4903-8f01-80c3b88e5210",
            alt: "sophia-widht"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/sophia-widht_3.jpg?alt=media&token=b54f958f-9bb3-42f3-8ad7-e6d5047288cc",
            alt: "sophia-widht"
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/proyectoreact-e96c2.appspot.com/o/sophia-widht_4.jpg?alt=media&token=4cccdcca-f561-4550-93dd-ae849e045e71",
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
    ], "office")
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

//////////////// Firebase ////////////////
// CREATE ////////////////
export const createItem = async (obj) => {
    const colRef = collection(db, 'productos');
    const data = await addDoc(colRef, {
        id: obj.id,
        title: obj.title,
        color: obj.color,
        stock: obj.stock,
        img: obj.img,
        price: obj.price,
        desc: obj.desc,
        category: obj.category
    });
    return data.id;
}

// UPDATE ////////////////
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'productos');
    await updateDoc(doc(colRef, id), {
        id: obj.id,
        title: obj.title,
        color: obj.color,
        stock: obj.stock,
        img: obj.img,
        price: obj.price,
        desc: obj.desc,
        category: obj.category
    });
}

// READ ////////////////
export const getItems = async () => {
    const colRef = collection(db, 'productos');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE ////////////////
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCategory = async (value) => {
    const colRef = collection(db, 'productos');
    const result = await getDocs(query(colRef, where('categoryId', '==', value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (id) => {
    const colRef = collection(db, 'productos');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE ////////////////
export const deleteItem = async (id) => {
    const colRef = collection(db, 'productos');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}
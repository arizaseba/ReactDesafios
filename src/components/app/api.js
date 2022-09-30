import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, where } from "firebase/firestore";
import { db } from './firebase';

// Firebase ////////////////
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
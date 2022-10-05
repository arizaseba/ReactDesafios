import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, where, orderBy } from "firebase/firestore";
import { db } from './firebase';

// CREATE
export const createItem = async (obj) => {
    const colRef = collection(db, 'productos');
    const data = await addDoc(colRef, {
        title: obj.title,
        color: obj.color,
        stock: parseInt(obj.stock),
        img: obj.img,
        price: parseFloat(obj.price),
        desc: obj.desc,
        category: obj.category
    });
    return data.id;
}
// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'productos');
    await updateDoc(doc(colRef, id), {
        title: obj.title,
        color: obj.color,
        stock: parseInt(obj.stock),
        img: obj.img,
        price: parseFloat(obj.price),
        desc: obj.desc,
        category: obj.category
    });
}
// READ
export const getItems = async (orden, sentido) => {
    const colRef = collection(db, 'productos');
    const result = orden && sentido ? await getDocs(query(colRef, orderBy(orden, sentido))) : await getDocs(query(colRef))
    return getArrayFromCollection(result);
}
// READ WITH WHERE
export const getItemsByCategory = async (value) => {
    const colRef = collection(db, 'productos');
    const result = await getDocs(query(colRef, where('category', '==', value)));
    return getArrayFromCollection(result);
}
export const getItemById = async (id) => {
    const colRef = collection(db, 'productos');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}
// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'productos');
    await deleteDoc(doc(colRef, id));
}
const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}
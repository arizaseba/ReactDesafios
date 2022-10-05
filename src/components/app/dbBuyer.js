import { collection, doc, addDoc, deleteDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from './firebase';

// CREATE
export const createOrder = async (obj) => {
    const colRef = collection(db, 'orders');
    const data = await addDoc(colRef, obj);
    return data.id;
}
// UPDATE
export const updateOrder = async (id, obj) => {
    const colRef = collection(db, 'orders');
    await updateDoc(doc(colRef, id), obj);
}
// DELETE
export const deleteOrder = async (id) => {
    const colRef = collection(db, 'orders');
    await deleteDoc(doc(colRef, id));
}
// READ
export const getOrderById = async (id) => {
    const colRef = collection(db, 'orders');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}
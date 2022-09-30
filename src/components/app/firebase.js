import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1H3GA9OnGkVbkvw9zF0w1DVyfkO1eBPg",
  authDomain: "proyectoreact-e96c2.firebaseapp.com",
  projectId: "proyectoreact-e96c2",
  storageBucket: "proyectoreact-e96c2.appspot.com",
  messagingSenderId: "388437357060",
  appId: "1:388437357060:web:fe22526e9c4264c6cfbb51",
  measurementId: "G-JRG7S1NH28"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);
export const auth = getAuth(app);

// Si descomentas la siguiente línea, cuando mientras que el usuario no se desloguee expresamente o cierre el navegador, permanecerá logueado y podremos acceder a su id desde cualquier página
setPersistence(auth, browserLocalPersistence);
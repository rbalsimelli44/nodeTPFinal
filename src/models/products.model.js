import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;

const jsonPath = path.join(__dirname, "./products.json");
const json = fs.readFileSync(jsonPath, "utf-8");
const productos = JSON.parse(json);

import { db } from './data.js';
import { 
  collection, 
  getDocs,
  doc,
  getDoc,
  addDoc, 
  deleteDoc,
} from "firebase/firestore";

const productsCollection = collection(db, "productos");

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
};

export const getProductId = async (productoId) => {
  try {
    const productRef = doc(productsCollection, productoId);
    const snapshot = await getDoc(productRef);
    return snapshot.exists() ? { id: snapshot.productoId, ...snapshot.data() } : null;   
  } catch (error) {
    console.error(error);
  }
};

export const addNewProduct = async (datos) => {
  try {
    const docRef = await addDoc(productsCollection, datos);
    return { id: docRef.id, ...datos };   
  } catch (error) {
    console.error(error);
  }  
};

export const deleteProduct = async (productoId) => {
  try {
    const productRef = doc(productsCollection, productoId);
    const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return false;
  }

  await deleteDoc(productRef);
  return true; 

  } catch (error) {
    console.error(error);
  }
};
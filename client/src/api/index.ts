//@ts-ignore
import db from './sdk.js';
import { collection, getDocs, doc, getDoc, updateDoc, addDoc } from 'firebase/firestore';

const SDK = {
  getCollectionConfiguration: (collectionName: string, document: string) => {
    return getDoc(doc(db, collectionName, document));
  },
  addItemToCollection: async (collectionName: string, document: string, store = 'items') => {
    const docRef = doc(db, collectionName, document);
    const docSnap = await getDoc(docRef);
    const existingData = docSnap.exists() ? docSnap.data() : {};
    console.log({ existingData });
    const mergedData = {
      [store]: [...(existingData[store] || []), { original: 'lol', translation: 'omg' }]
    };
    await updateDoc(docRef, mergedData);
  }
};

export default SDK;

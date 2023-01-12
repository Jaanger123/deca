import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const addDocument = async (coll: string, data: object) => {
    const collRef = collection(db, coll);
    const docRef = await addDoc(collRef, data);

    return docRef;
};

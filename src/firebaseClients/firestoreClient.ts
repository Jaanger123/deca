import { collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from 'firebaseConfig';

export const addDocument = async (coll: string, data: object) => {
    const collRef = collection(db, coll);
    const doc = await addDoc(collRef, data);

    return doc;
};

export const getDocuments = async (coll: string) => {
    const collRef = collection(db, coll);
    const docs = await getDocs(collRef);

    return docs;
};

export const getDocument = async (coll: string, id: string | undefined) => {
    if (!id) return null;

    const docRef = doc(db, coll, id);
    const document = await getDoc(docRef);

    return document;
};

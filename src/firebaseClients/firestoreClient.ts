import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "firebaseConfig";

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

import { collection, setDoc } from 'firebase/firestore';
import db from './firebaseConfig';

const addDocument = (coll) => {
    const collRef = collection(db, coll);
    setDoc(cityRef, { capital: true }, { merge: true });
};

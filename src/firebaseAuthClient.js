import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const register = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
};

export const login = async () => {};

export const logout = async () => {};

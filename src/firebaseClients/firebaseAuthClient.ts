import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebaseConfig";

export const register = async (email: string, password: string) => {
    try {
        const user = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
    } catch (error: any) {
        console.log(error.message);
    }
};

export const login = async () => {};

export const logout = async () => {};

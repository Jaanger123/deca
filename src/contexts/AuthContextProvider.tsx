import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import { auth } from 'firebaseConfig';
import { validateEmail } from 'utils/auth';

interface IAuthContext {
    signUp: Function;
    signIn: Function;
    signOut: Function;
    error: string;
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IAuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState('');

    const signUp = async (email: string, password: string) => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (!validateEmail(trimmedEmail)) {
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 4000);
            return setError('Invalid email given');
        }

        try {
            console.log('work');

            const user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(user);
        } catch (error: any) {
            // ! HOW TYPE FIREBBASE AUTHENTICATION ERRORS
            console.log(error.message);
        }
    };

    const signIn = async () => {};

    const signOut = async () => {};

    const values = {
        signUp,
        signIn,
        signOut,
        error,
        showPopup,
        setShowPopup,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export default AuthContextProvider;

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { validateEmail, validatePassword } from 'utils/auth';
import { User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from 'utils/consts';
import { auth, provider } from 'firebaseConfig';

interface IAuthContext {
    signUp: Function;
    signIn: Function;
    signUpInGoogle: Function;
    signOutAccount: Function;
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
    errorMessage: string;
    emailError: string;
    passwordError: string;
    user: User | null;
    loadingBtn: boolean;
    loadingGoogleBtn: boolean;
}

interface IAuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [loadingBtn, setLoadingBtn] = useState<boolean>(false);
    const [loadingGoogleBtn, setLoadingGoogleBtn] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    const validateData = (email: string, password: string, hasUser = false) => {
        setEmailError('');
        setPasswordError('');

        if (!email) {
            setEmailError('Please, enter your email');
            return false;
        }

        if (!password) {
            setPasswordError('Please, enter your password');
            return false;
        }

        if (!validateEmail(email)) {
            setEmailError('Invalid email given');
            return false;
        }

        if (!hasUser) {
            if (validatePassword(password)) {
                setPasswordError(validatePassword(password));
                return false;
            }
        }

        return true;
    };

    const signUp = async (email: string, password: string) => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (validateData(trimmedEmail, trimmedPassword)) {
            try {
                setLoadingBtn(true);
                await createUserWithEmailAndPassword(
                    auth,
                    trimmedEmail,
                    trimmedPassword
                );

                navigate(HOME_ROUTE);
            } catch (error: any) {
                // ! HOW TYPE FIREBBASE AUTHENTICATION ERRORS
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        setErrorMessage('This email address already in use.');
                        setShowPopup(true);
                        break;

                    default:
                        setShowPopup(true);
                        setErrorMessage('Unexpected error ;(');
                }
            } finally {
                setLoadingBtn(false);
            }
        }
    };

    const signIn = async (email: string, password: string) => {
        setEmailError('');
        setPasswordError('');
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (validateData(trimmedEmail, trimmedPassword, true)) {
            try {
                setLoadingBtn(true);
                await signInWithEmailAndPassword(
                    auth,
                    trimmedEmail,
                    trimmedPassword
                );

                navigate(HOME_ROUTE);
            } catch (error: any) {
                // ! HOW TYPE FIREBBASE AUTHENTICATION ERRORS
                switch (error.code) {
                    case 'auth/user-not-found':
                        setErrorMessage('User with such email does not exist.');
                        setShowPopup(true);
                        break;
                    case 'auth/wrong-password':
                        setErrorMessage('Wrong password given');
                        setShowPopup(true);
                        break;

                    default:
                        console.log(error.code);

                        setShowPopup(true);
                        setErrorMessage('Unexpected error ;(');
                }
            } finally {
                setLoadingBtn(false);
            }
        }
    };

    const signUpInGoogle = async () => {
        try {
            setLoadingGoogleBtn(true);

            await signInWithPopup(auth, provider);

            navigate(HOME_ROUTE);
        } catch (error: any) {
            // ! HOW TYPE FIREBBASE AUTHENTICATION ERRORS
            switch (error.code) {
                default:
                    setShowPopup(true);
                    setErrorMessage('Unexpected error ;(');
            }
        } finally {
            setLoadingGoogleBtn(false);
        }
    };

    const signOutAccount = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            setShowPopup(true);
            setErrorMessage('Unexpected error ;(');
        }
    };

    const values = {
        signUp,
        signIn,
        signUpInGoogle,
        signOutAccount,
        showPopup,
        setShowPopup,
        errorMessage,
        emailError,
        passwordError,
        user,
        loadingBtn,
        loadingGoogleBtn,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export default AuthContextProvider;

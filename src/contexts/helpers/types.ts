import { User } from 'firebase/auth';

export interface IContextProviderProps {
    children: React.ReactNode;
}

export interface IReducerAction<payloadType = any> {
    type: string;
    payload?: payloadType;
}

export interface IGameSet {
    id: string;
    gameSetTitle: string;
    playersQuantity: string;
    gameSetPrice: number;
    gameSetDifficulty: number;
    gameDuration: string;
    gameTheme: string;
    description: string;
    characterImgs: Array<string>;
    bgImg: string;
}

export interface IGameSetInfo {
    surname: string;
    name: string;
    email: string;
    phoneNumber: string;
    gameSet: string;
    playersQuantity: string;
    time: string;
    date: Date;
}

export interface IFormData {
    [key: string]: string;
    surname: string;
    name: string;
    email: string;
    number: string;
    gameSet: string;
    players: string;
    time: string;
    dateInput: string;
}

export interface IAuthContext {
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
    siteLoading: boolean;
    setSiteLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IGameOrderContext {
    formData: IFormData;
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
    countryCode: string;
    setCountryCode: React.Dispatch<React.SetStateAction<string>>;
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IGameSetContext {
    gameSets: Array<IGameSet>;
    gameSet: IGameSet | null;
    getGameSet: (id: string) => Promise<void>;
    setGameSet: (gameSet: IGameSet | undefined) => Promise<void>;
}

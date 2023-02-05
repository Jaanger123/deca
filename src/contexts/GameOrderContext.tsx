import { useState, createContext, useContext } from 'react';
import { IFormData } from '../types/gameOrderTypes';
import { transformDate } from '../utils/gameOrder';

interface IGameOrderContext {
    formData: IFormData;
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
    countryCode: string;
    setCountryCode: React.Dispatch<React.SetStateAction<string>>;
}

interface IGameOrderProviderProps {
    children: React.ReactNode;
}

export const GameOrderContext = createContext<IGameOrderContext | null>(null);

export const useGameOrder = () => useContext(GameOrderContext);

export const GameOrderProvider = ({ children }: IGameOrderProviderProps) => {
    const [date, setDate] = useState(new Date());
    const [countryCode, setCountryCode] = useState('+996 ');

    const [formData, setFormData] = useState<IFormData>({
        surname: '',
        name: '',
        email: '',
        number: '+996 ',
        gameSet: '',
        players: '',
        characters: '',
        time: '',
        dateInput: transformDate(date),
    });

    const values = {
        formData,
        setFormData,
        date,
        setDate,
        countryCode,
        setCountryCode,
    };

    return (
        <GameOrderContext.Provider value={values}>
            {children}
        </GameOrderContext.Provider>
    );
};

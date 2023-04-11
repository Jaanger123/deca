import {
    IContextProviderProps,
    IFormData,
    IGameOrderContext,
} from './helpers/types';
import { getTomorrowDate, transformDate } from './helpers/gameOrder';
import { useState, createContext, useContext } from 'react';

export const GameOrderContext = createContext<IGameOrderContext>(
    {} as IGameOrderContext
);

export const useGameOrder = () => useContext(GameOrderContext);

const GameOrderContextProvider = ({ children }: IContextProviderProps) => {
    const [showPopup, setShowPopup] = useState(false);
    const [date, setDate] = useState(new Date(getTomorrowDate()));
    const [countryCode, setCountryCode] = useState('+996 ');

    const [formData, setFormData] = useState<IFormData>({
        surname: '',
        name: '',
        email: '',
        number: '+996 ',
        gameSet: '',
        players: '',
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
        showPopup,
        setShowPopup,
    };

    return (
        <GameOrderContext.Provider value={values}>
            {children}
        </GameOrderContext.Provider>
    );
};

export default GameOrderContextProvider;

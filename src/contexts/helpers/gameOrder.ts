import React from 'react';
import { monthNames } from 'utils/consts';
import { IFormData, IGameSet } from './types';

export const transformDate = (date: Date) => {
    console.log(date, 'data');
    return `${date.getDate()} ${
        monthNames[date.getMonth()]
    }, ${date.getFullYear()}`;
};

export const numberPattern = (
    code: string,
    number: string,
    prevNumber: string
) => {
    const re = /^[0-9()\- ]+$/g;
    const format = code === '+996 ' ? [13, 14, 9, 12] : [14, 15, 10, 13];

    if (re.test(number) || number.length === 0) {
        if (number.length > format[0]) {
            return code + number.slice(0, format[1]);
        } else if (number.length === 1 && number.length > prevNumber.length) {
            return code + '(' + number;
        } else if (number.length === 5 && number.length > prevNumber.length) {
            return (
                code +
                number.slice(0, number.length - 1) +
                ') ' +
                number[number.length - 1]
            );
        } else if (number.length === 4 && number.length > prevNumber.length) {
            return code + number + ')';
        } else if (number.length === 6 && number.length > prevNumber.length) {
            return (
                code +
                number.slice(0, number.length - 1) +
                ' ' +
                number[number.length - 1]
            );
        } else if (
            number.length === format[2] &&
            number.length > prevNumber.length
        ) {
            return (
                code +
                number.slice(0, number.length - 1) +
                '-' +
                number[number.length - 1]
            );
        } else if (
            number.length === format[3] &&
            number.length > prevNumber.length
        ) {
            return (
                code +
                number.slice(0, number.length - 1) +
                '-' +
                number[number.length - 1]
            );
        }

        return code + number;
    }

    return code + prevNumber;
};

export const surnameInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>,
    setSurnameError: React.Dispatch<React.SetStateAction<Boolean>>
) => {
    const surnameRe = /^[a-zA-Z ]+$/;
    const key = event.target.name;

    if (!surnameRe.test(event.target.value.trim())) {
        setSurnameError(true);
        setFormData((prev) => {
            const newObj = { ...prev };
            newObj[key] = event.target.value.trim();
            return newObj;
        });
        return;
    }

    setSurnameError(false);
    setFormData((prev) => {
        const newObj = { ...prev };
        newObj[key] = event.target.value.trim();
        return newObj;
    });
};

export const nameInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>,
    setNameError: React.Dispatch<React.SetStateAction<Boolean>>
) => {
    const nameRe = /^[a-zA-Z ]+$/;
    const key = event.target.name;

    if (!nameRe.test(event.target.value.trim())) {
        setNameError(true);
        setFormData((prev) => {
            const newObj = { ...prev };
            newObj[key] = event.target.value.trim();
            return newObj;
        });
        return;
    }

    setNameError(false);
    setFormData((prev) => {
        const newObj = { ...prev };
        newObj[key] = event.target.value.trim();
        return newObj;
    });
};

export const emailInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>,
    setEmailError: React.Dispatch<React.SetStateAction<Boolean>>
) => {
    const emailRe =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const key = event.target.name;

    if (!emailRe.test(event.target.value.trim())) {
        setEmailError(true);
        setFormData((prev) => {
            const newObj = { ...prev };
            newObj[key] = event.target.value.trim();
            return newObj;
        });
        return;
    }

    setEmailError(false);
    setFormData((prev) => {
        const newObj = { ...prev };
        newObj[key] = event.target.value.trim();
        return newObj;
    });
};

export const validateNumber = (
    { target: { name: key, value } }: React.ChangeEvent<HTMLInputElement>,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>,
    countryCode: string
) => {
    setFormData((prev) => {
        const newObj = { ...prev };
        const number = numberPattern(
            countryCode,
            value.slice(countryCode.length),
            prev.number.slice(countryCode.length)
        );

        newObj[key] = number;

        return newObj;
    });
};

export const countryCodeInputHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>,
    setCountryCode: React.Dispatch<React.SetStateAction<string>>
) => {
    setFormData((prev) => {
        const newObj = { ...prev };
        newObj.number = event.target.value;
        setCountryCode(event.target.value);

        return newObj;
    });
};

export const gameSetSelectHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>
) => {
    setFormData((prev) => {
        const key = event.target.name;
        const newObj = { ...prev };

        newObj[key] = event.target.value;

        return newObj;
    });
};

export const playersSelectHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>
) => {
    setFormData((prev) => {
        const key = event.target.name;
        const newObj = { ...prev };

        newObj[key] = event.target.value;

        return newObj;
    });
};

export const charactersSelectHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>
) => {
    setFormData((prev) => {
        const key = event.target.name;
        const newObj = { ...prev };

        newObj[key] = event.target.value;

        return newObj;
    });
};

export const dateCalendarHandler = (
    date: Date,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>,
    setDate: React.Dispatch<React.SetStateAction<Date>>
) => {
    setFormData((prev) => {
        const newObj = { ...prev };

        setDate(date);
        newObj.dateInput = transformDate(date);

        return newObj;
    });
};

export const timeSelectHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>
) => {
    setFormData((prev) => {
        const key = event.target.name;
        const newObj = { ...prev };

        newObj[key] = event.target.value;

        return newObj;
    });
};

export const gameSetAutoFill = (
    gameSetTitle: string,
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>
) => {
    setFormData((prev) => {
        const newObj = { ...prev };

        newObj.gameSet = gameSetTitle;

        return newObj;
    });
};

export const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);

    return tomorrow;
};

export const searchGameSetTitle = (
    gameSets: Array<IGameSet>,
    titleToSearch: string
): boolean => {
    for (let gameSet of gameSets) {
        if (gameSet.gameSetTitle === titleToSearch) return true;
    }
    return false;
};

import {
    surnameInputHandler,
    nameInputHandler,
    emailInputHandler,
    validateNumber,
    countryCodeInputHandler,
    gameSetSelectHandler,
    playersSelectHandler,
    charactersSelectHandler,
    dateCalendarHandler,
    timeSelectHandler,
} from '../../utils/gameOrder';
import { useGameOrder } from '../../contexts/GameOrderContext';
import { addDocument } from '../../firestoreClient';
import PopupModal from '../PopupModal/PopupModal';
import { ORDERS_COLLECTION } from '../../consts';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

import './GameOrderMain.scss';
import './Calendar.scss';

// import KG from '../../assets/images/input-kyrgyz-flag.svg'; // ????
// import RU from '../../assets/images/input-russian-flag.svg'; // ????
const KG = require('../../assets/images/input-kyrgyz-flag.svg') as ISVG; // ????
const RU = require('../../assets/images/input-russian-flag.svg') as ISVG; // ????

interface ISVG {
    default: string;
}

const GameOrderMain = () => {
    const [surnameError, setSurnameError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [numberLength, setNumberLength] = useState(0);

    const gameOrderContextValues = useGameOrder(); // ?????????

    if (!gameOrderContextValues) return null;

    const {
        formData,
        setFormData,
        date,
        setDate,
        countryCode,
        setCountryCode,
    } = gameOrderContextValues;

    const numberInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        validateNumber(event, setFormData, countryCode);

        if (countryCode === '+996 ') {
            setNumberError(
                !(
                    formData.number.length === 19 ||
                    formData.number.length === 18
                )
            );
        } else if (countryCode === '+7 ') {
            setNumberError(!(formData.number.length === 18));
        }
    };

    const onCheckout = () => {
        if (
            formData.surname.trim() === '' ||
            formData.name.trim() === '' ||
            formData.email.trim() === '' ||
            formData.number.trim() === '' ||
            formData.gameSet.trim() === '' ||
            formData.players.trim() === '' ||
            formData.characters.trim() === '' ||
            formData.time.trim() === ''
        ) {
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
            return;
        }

        if (surnameError || nameError || emailError || numberError) {
            alert('Invalid data given');
            return;
        }

        const data = {
            surname: formData.surname,
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.number,
            gameSet: formData.gameSet,
            playersQuantity: formData.players,
            characters: formData.characters,
            time: formData.time,
            date,
        };

        addDocument(ORDERS_COLLECTION, data);
    };

    return (
        <>
            <PopupModal
                message={'Fill in all the fields!'}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
            />
            <main className="game-order-main">
                <div className="game-order-form">
                    <h2 className="game-order-title">Register to a game</h2>
                    <div className="game-order-contact-form">
                        <p>Contact information</p>
                        <hr />
                        <div className="game-order-contact-form-inputs">
                            <div className="form-input">
                                <span>Surname</span>
                                <input
                                    type="text"
                                    placeholder="Your surname"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={(event) =>
                                        surnameInputHandler(
                                            event,
                                            setFormData,
                                            setSurnameError
                                        )
                                    }
                                />
                                {surnameError ? (
                                    <span className="error-message">
                                        Invalid surname given
                                    </span>
                                ) : null}
                            </div>
                            <div className="form-input">
                                <span>Name</span>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(event) =>
                                        nameInputHandler(
                                            event,
                                            setFormData,
                                            setNameError
                                        )
                                    }
                                />
                                {nameError ? (
                                    <span className="error-message">
                                        Invalid name given
                                    </span>
                                ) : null}
                            </div>
                            <div className="form-input">
                                <span>Email</span>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(event) =>
                                        emailInputHandler(
                                            event,
                                            setFormData,
                                            setEmailError
                                        )
                                    }
                                />
                                {emailError ? (
                                    <span className="error-message">
                                        Invalid email given
                                    </span>
                                ) : null}
                            </div>
                            <div className="form-input">
                                <span>Number</span>
                                <div className="game-order-contact-form-editable-select">
                                    <input
                                        type="tel"
                                        name="number"
                                        value={formData.number}
                                        onChange={numberInputHandler}
                                    />
                                    <div className="game-order-contact-form-flag-arrow">
                                        <div className="game-order-contact-form-flag-wrapper">
                                            <img
                                                className="game-order-contact-form-flag"
                                                src={
                                                    countryCode === '+996 '
                                                        ? KG.default
                                                        : RU.default
                                                }
                                                alt="Country"
                                            />
                                        </div>

                                        <select
                                            name="countryCode"
                                            value={countryCode}
                                            onChange={(event) =>
                                                countryCodeInputHandler(
                                                    event,
                                                    setFormData,
                                                    setCountryCode
                                                )
                                            }
                                        >
                                            <option value="+996 ">+996</option>
                                            <option value="+7 ">+7</option>
                                        </select>
                                        <img
                                            className="game-order-contact-form-arrow"
                                            src={
                                                require('../../assets/images/input-arrow-down.svg')
                                                    .default
                                            }
                                            alt="Arrow down"
                                        />
                                    </div>
                                </div>
                                {numberError ? (
                                    <span className="error-message">
                                        Invalid phone number given
                                    </span>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="game-order-game-form">
                        <p>Game information</p>
                        <hr />
                        <div className="game-order-game-form-selects">
                            <div className="form-select">
                                <span>Game set</span>
                                <select
                                    name="gameSet"
                                    value={formData.gameSet}
                                    onChange={(event) =>
                                        gameSetSelectHandler(event, setFormData)
                                    }
                                    className={
                                        formData.gameSet !== ''
                                            ? ''
                                            : 'disabled'
                                    }
                                >
                                    <option value="" disabled hidden>
                                        Choose a game set
                                    </option>
                                    <option value="Aika">Aika</option>
                                    <option value="Jaga">Jaga</option>
                                </select>
                            </div>
                            <div className="game-order-game-form-inputs-wrapper">
                                <div className="form-select">
                                    <span>Number of players</span>
                                    <select
                                        name="players"
                                        value={formData.players}
                                        onChange={(event) =>
                                            playersSelectHandler(
                                                event,
                                                setFormData
                                            )
                                        }
                                        className={
                                            formData.players !== ''
                                                ? ''
                                                : 'disabled'
                                        }
                                    >
                                        <option value="" disabled hidden>
                                            Players number
                                        </option>
                                        <option value="2">2</option>
                                        <option value="4">4</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                                <div className="form-select">
                                    <span>Characters</span>
                                    <select
                                        name="characters"
                                        value={formData.characters}
                                        onChange={(event) =>
                                            charactersSelectHandler(
                                                event,
                                                setFormData
                                            )
                                        }
                                        className={
                                            formData.characters !== ''
                                                ? ''
                                                : 'disabled'
                                        }
                                    >
                                        <option value="" disabled hidden>
                                            Choose a character
                                        </option>
                                        <option value="Aika">Aika</option>
                                        <option value="Jaga">Jaga</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="game-order-date-form">
                        <p>Date</p>
                        <hr />
                        <div className="game-order-date-form-inputs-wrapper">
                            <Calendar
                                onChange={(date: Date) => {
                                    dateCalendarHandler(
                                        date,
                                        setFormData,
                                        setDate
                                    );
                                }}
                                value={date}
                            />
                            <div className="game-order-date-form-inputs">
                                <div className="form-input">
                                    <span>Date</span>
                                    <input
                                        type="text"
                                        value={formData.dateInput}
                                        readOnly
                                    />
                                </div>
                                <div className="form-select">
                                    <span>Time</span>
                                    <select
                                        name="time"
                                        value={formData.time}
                                        onChange={(event) =>
                                            timeSelectHandler(
                                                event,
                                                setFormData
                                            )
                                        }
                                        className={
                                            formData.time !== ''
                                                ? ''
                                                : 'disabled'
                                        }
                                    >
                                        <option value="" disabled hidden>
                                            Select time
                                        </option>
                                        <option value="13:00 - 16:00 PM">
                                            13:00 - 16:00 PM
                                        </option>
                                        <option value="16:00 - 19:00 PM">
                                            16:00 - 19:00 PM
                                        </option>
                                        <option value="19:00 - 22:00 PM">
                                            19:00 - 22:00 PM
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={onCheckout}>Checkout</button>
            </main>
        </>
    );
};

export default GameOrderMain;

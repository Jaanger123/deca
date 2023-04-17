import {
    gameSetSelectHandler,
    playersSelectHandler,
    surnameInputHandler,
    dateCalendarHandler,
    searchGameSetTitle,
    timeSelectHandler,
    emailInputHandler,
    nameInputHandler,
    gameSetAutoFill,
    findGameSet,
} from 'contexts/helpers/gameOrder';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { useGameOrder } from 'contexts/GameOrderContextProvider';
import { useGameSet } from 'contexts/GameSetContextProvider';
import { IGameSetInfo } from 'contexts/helpers/types';
import { E164Number } from 'libphonenumber-js/types';
import PaymentModal from 'components/PaymentModal';
import { useSearchParams } from 'react-router-dom';
import PopupModal from 'components/PopupModal';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

import './GameOrderMain.scss';
import './Calendar.scss';

const GameOrderMain = () => {
    const { formData, setFormData, date, setDate, showPopup, setShowPopup } =
        useGameOrder();
    const { gameSets, setGameSet } = useGameSet();
    const [searchParams] = useSearchParams();
    const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
    const [gameSetData, setGameSetData] = useState<IGameSetInfo>(
        {} as IGameSetInfo
    );
    const [surnameError, setSurnameError] = useState<boolean>(false);
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [numberError, setNumberError] = useState<boolean>(false);

    useEffect(() => {
        const gameSetParam = searchParams.get('game-set');
        if (gameSetParam && searchGameSetTitle(gameSets, gameSetParam)) {
            gameSetAutoFill(gameSetParam, setFormData);
        }
    }, [searchParams]);

    const currentDate = new Date();

    const onCheckout = () => {
        for (let field in formData) {
            if (!formData[field].trim()) {
                setShowPopup(true);
                return;
            }
        }

        if (surnameError || nameError || emailError || numberError) {
            setShowPopup(true);
            return;
        }

        const data: IGameSetInfo = {
            surname: formData.surname,
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.number,
            gameSet: formData.gameSet,
            playersQuantity: formData.players,
            time: formData.time,
            date,
        };

        setGameSetData(data);
        setShowPaymentModal(true);
    };

    const phoneInputHandler = (value: E164Number) => {
        if (value) {
            if (!isValidPhoneNumber(value)) return setNumberError(true);
            else setNumberError(false);
        }

        setFormData((prev) => {
            return { ...prev, number: value };
        });
    };

    return (
        <>
            <PopupModal
                message={'Fill in all the fields and provide valid data!'}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
            />
            <PaymentModal
                showPaymentModal={showPaymentModal}
                setShowPaymentModal={setShowPaymentModal}
                data={gameSetData}
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
                            <div className="form-input phone-input">
                                <span>Number</span>
                                <PhoneInput
                                    international
                                    defaultCountry="KG"
                                    countryCallingCodeEditable={false}
                                    placeholder="Enter phone number"
                                    countries={['KG', 'RU', 'KZ']}
                                    value={formData.number}
                                    onChange={phoneInputHandler}
                                />
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
                                    onChange={(event) => {
                                        gameSetSelectHandler(
                                            event,
                                            setFormData
                                        );
                                        const gameSet = findGameSet(
                                            gameSets,
                                            event.target.value
                                        );
                                        setGameSet(gameSet);
                                    }}
                                    className={
                                        formData.gameSet !== ''
                                            ? ''
                                            : 'disabled'
                                    }
                                >
                                    <option value="" disabled hidden>
                                        Choose a game set
                                    </option>
                                    {gameSets.map((gameSet, index) => (
                                        <option
                                            key={index}
                                            value={gameSet.gameSetTitle}
                                        >
                                            {gameSet.gameSetTitle}
                                        </option>
                                    ))}
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
                                        <option value="8">8</option>
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
                                tileDisabled={({ date }) => date < currentDate}
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
                                        className="inactive-input"
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

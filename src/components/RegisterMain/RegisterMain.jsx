import { register } from '../../firebaseAuthClient';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';

import './RegisterMain.scss';
import './Calendar.scss';

import KG from '../../assets/images/input-kyrgyz-flag.svg';
import RU from '../../assets/images/input-russian-flag.svg';

const RegisterMain = () => {
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('+996 ');
    const [selectNumber, setSelectNumber] = useState('+996 ');
    const [gameSet, setGameSet] = useState('');
    const [players, setPlayers] = useState('');
    const [characters, setCharacters] = useState('');
    const [time, setTime] = useState('');

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const transformDate = (date) => {
        return `${date.getDate()} ${
            monthNames[date.getMonth()]
        }, ${date.getFullYear()}`;
    };

    const [date, setDate] = useState(new Date());
    const [dateInput, setDateInput] = useState(transformDate(date));

    useEffect(() => {
        setDateInput(transformDate(date));
    }, [date]);

    return (
        <main className="register-main">
            <div className="register-form">
                <h2 className="register-title">Register to a game</h2>
                <div className="register-contact-form">
                    <p>Contact information</p>
                    <hr />
                    <div className="register-contact-form-inputs">
                        <div className="form-input">
                            <span>Surname</span>
                            <input
                                type="text"
                                placeholder="Your surname"
                                value={surname}
                                onChange={(event) =>
                                    setSurname(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-input">
                            <span>Name</span>
                            <input
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-input">
                            <span>Email</span>
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>
                        <div className="form-input">
                            <span>Number</span>
                            <div className="register-contact-form-editable-select">
                                <input
                                    type="tel"
                                    value={number}
                                    onChange={(event) =>
                                        setNumber(
                                            selectNumber +
                                                event.target.value.slice(
                                                    selectNumber.length
                                                )
                                        )
                                    }
                                />
                                <div className="register-contact-form-flag-arrow">
                                    <div className="register-contact-form-flag-wrapper">
                                        <img
                                            className="register-contact-form-flag"
                                            src={
                                                selectNumber === '+996 '
                                                    ? KG
                                                    : RU
                                            }
                                            alt="dafs"
                                        />
                                    </div>

                                    <select
                                        value={selectNumber}
                                        onChange={(event) => {
                                            setSelectNumber(event.target.value);
                                            setNumber(event.target.value);
                                        }}
                                    >
                                        <option value="+996 ">+996</option>
                                        <option value="+7 ">+7</option>
                                    </select>
                                    <img
                                        className="register-contact-form-arrow"
                                        src={
                                            require('../../assets/images/input-arrow-down.svg')
                                                .default
                                        }
                                        alt="Arrow down"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="register-game-form">
                    <p>Game information</p>
                    <hr />
                    <div className="register-game-form-selects">
                        <div className="form-select">
                            <span>Game set</span>
                            <select
                                value={gameSet}
                                onChange={(event) =>
                                    setGameSet(event.target.value)
                                }
                                className={gameSet !== '' ? '' : 'disabled'}
                            >
                                <option value="" disabled hidden>
                                    Choose a game set
                                </option>
                                <option value="Aika">Aika</option>
                                <option value="Jaga">Jaga</option>
                            </select>
                        </div>
                        <div className="register-game-form-inputs-wrapper">
                            <div className="form-select">
                                <span>Number of players</span>
                                <select
                                    value={players}
                                    onChange={(event) =>
                                        setPlayers(event.target.value)
                                    }
                                    className={players !== '' ? '' : 'disabled'}
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
                                    value={characters}
                                    onChange={(event) =>
                                        setCharacters(event.target.value)
                                    }
                                    className={
                                        characters !== '' ? '' : 'disabled'
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

                <div className="register-date-form">
                    <p>Date</p>
                    <hr />
                    <div className="register-date-form-inputs-wrapper">
                        <Calendar onChange={setDate} value={date} />
                        <div className="register-date-form-inputs">
                            <div className="form-input">
                                <span>Date</span>
                                <input type="text" value={dateInput} readOnly />
                            </div>
                            <div className="form-select">
                                <span>Time</span>
                                <select
                                    value={time}
                                    onChange={(event) =>
                                        setTime(event.target.value)
                                    }
                                    className={time !== '' ? '' : 'disabled'}
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
            <button onClick={() => register(email, surname)}>Checkout</button>
        </main>
    );
};

export default RegisterMain;

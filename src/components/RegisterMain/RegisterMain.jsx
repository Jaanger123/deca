import Calendar from 'react-calendar';
import React, { useEffect, useRef, useState } from 'react';

import './RegisterMain.scss';
import './Calendar.scss';

const RegisterMain = () => {
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
                            <input type="text" />
                        </div>
                        <div className="form-input">
                            <span>Name</span>
                            <input type="text" />
                        </div>
                        <div className="form-input">
                            <span>Email</span>
                            <input type="email" />
                        </div>
                        <div className="form-input">
                            <span>Number</span>
                            <input type="tel" defaultValue="+996" />
                        </div>
                    </div>
                </div>
                <div className="register-game-form">
                    <p>Game information</p>
                    <hr />
                    <div className="register-game-form-inputs">
                        <div className="form-input">
                            <span>Game set</span>
                            <input
                                type="text"
                                placeholder="Choose a game set"
                            />
                        </div>
                        <div className="register-game-form-inputs-wrapper">
                            <div className="form-input">
                                <span>Number of players</span>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <span>Characters</span>
                                <input type="text" />
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
                                <input
                                    type="text"
                                    // ref={dateInputRef}
                                    value={dateInput}
                                    // onChange={() => setDateInput}
                                    // placeholder="Choose a game set"
                                />
                            </div>
                            <div className="form-input">
                                <span>Time</span>
                                <input
                                    type="time"
                                    // placeholder="Choose a game set"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button>Checkout</button>
        </main>
    );
};

export default RegisterMain;

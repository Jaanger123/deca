import { NavLink } from 'react-router-dom';
import React from 'react';

import './Slides.scss';

const FirstSlide = () => {
    return (
        <section className="slide">
            <div className="slide-container">
                <div className="slide-content">
                    <h1 className="slide-title">
                        A new way
                        <br />
                        to perceive games
                    </h1>
                    <p className="slide-description">
                        Role-playing board games now in Kyrgyzstan
                    </p>
                    <NavLink to="/about">
                        <button className="slide-button">ABOUT US</button>
                    </NavLink>
                </div>
                <img
                    className="first-slide-puzzle"
                    src={require('../../../assets/images/pieces.png')}
                    alt="Puzzle pieces"
                />
            </div>
        </section>
    );
};

export default FirstSlide;

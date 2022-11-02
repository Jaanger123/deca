import React from 'react';

import './Slides.scss';

const FirstSlide = () => {
    return (
        <section className="first-slide">
            <div className="slide-content">
                <h1 className="slide-title">A new way to perceive games</h1>
                <p className="slide-description">
                    Role-playing board games now in Kyrgyzstan
                </p>
                <button className="slide-button">ABOUT US</button>
            </div>
            <img src={require('../../images/pieces.png')} alt="Puzzle pieces" />
        </section>
    );
};

export default FirstSlide;

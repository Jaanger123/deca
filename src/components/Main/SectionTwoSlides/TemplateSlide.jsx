import React from 'react';

import './Slides.scss';

const TemplateSlide = ({ children, characterImg, isSecond }) => {
    return (
        <>
            <img src={characterImg} alt="Character" />
            {isSecond ? (
                <img
                    src={require('../../../assets/images/character-five.png')}
                    alt="Character"
                    className="second-slide-character-sm"
                />
            ) : null}
            <div className="hm-so-slide-text">
                <h3>NEW</h3>
                {children}
            </div>
        </>
    );
};

export default TemplateSlide;

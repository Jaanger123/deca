import TemplateSlide from './TemplateSlide';
import React from 'react';

import './Slides.scss';

const ThirdSlide = () => {
    return (
        <div className="hm-st-slide hm-st-slide-third">
            <TemplateSlide
                characterImg={require('../../../assets/images/character-four.png')}
            >
                <h4>Spooky game set</h4>
                <div className="hm-st-players-quantity">
                    <img
                        src={
                            require('../../../assets/images/players-icon.svg')
                                .default
                        }
                        alt="Players icon"
                    />
                    <p>{'(10 players)'}</p>
                </div>
            </TemplateSlide>
        </div>
    );
};

export default ThirdSlide;

import TemplateSlide from './TemplateSlide';
import React from 'react';

import './Slides.scss';

const SecondSlide = () => {
    return (
        <div className="hm-st-slide hm-st-slide-second">
            <TemplateSlide
                characterImg={require('../../../assets/images/character-three.png')}
                isSecond={true}
            >
                <h4>Classic game set</h4>
                <div className="hm-st-players-quantity">
                    <img
                        src={
                            require('../../../assets/images/players-icon.svg')
                                .default
                        }
                        alt="Players icon"
                    />

                    <p>{'(4 players)'}</p>
                </div>
            </TemplateSlide>
        </div>
    );
};

export default SecondSlide;

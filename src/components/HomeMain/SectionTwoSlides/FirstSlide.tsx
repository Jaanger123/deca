import TemplateSlide from './TemplateSlide';

import './Slides.scss';

const FirstSlide = () => {
    return (
        <div className="hm-st-slide hm-st-slide-first">
            <TemplateSlide
                characterImg={require('../../../assets/images/character-two.png')}
            >
                <h4>Manas game set</h4>
                <div className="hm-st-players-quantity">
                    <img
                        src={
                            require('../../../assets/images/players-icon.svg')
                                .default
                        }
                        alt="Players icon"
                    />
                    <p>{'(4-6 players)'}</p>
                </div>
            </TemplateSlide>
        </div>
    );
};

export default FirstSlide;

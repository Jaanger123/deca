import TemplateSlide from './TemplateSlide';

import './Slides.scss';

const ThirdSlide = () => {
    return (
        <div className="hm-so-slide hm-so-slide-third">
            <TemplateSlide
                slideImg={
                    require('../../../assets/images/halloween-pumpkin.svg')
                        .default
                }
                imgAlt="People"
            >
                <h2>Choose your own game set</h2>
                <p>Different gameplay options</p>
            </TemplateSlide>
        </div>
    );
};

export default ThirdSlide;

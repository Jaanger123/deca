import { firstSlide } from './helper/contentData';
import { NavLink } from 'react-router-dom';
import { ABOUT_ROUTE } from 'utils/consts';

import './Slides.scss';

const FirstSlide = () => (
    <section className="slide">
        <div className="slide-container">
            <div className="slide-content">
                <div className="slide-title">
                    {firstSlide.title.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
                <p className="slide-description">{firstSlide.description}</p>
                <NavLink to={ABOUT_ROUTE}>
                    <button className="slide-button">
                        {firstSlide.button}
                    </button>
                </NavLink>
            </div>
            <img
                className="first-slide-puzzle"
                src={require('assets/images/pieces.png')}
                alt="Puzzle pieces"
            />
        </div>
    </section>
);

export default FirstSlide;

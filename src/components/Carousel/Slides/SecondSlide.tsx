import { secondSlide } from './helper/contentData';
import { PRODUCTS_ROUTE } from 'utils/consts';
import { NavLink } from 'react-router-dom';
import Video from './Video';

import './Slides.scss';

const SecondSlide = () => (
    <section className="second-slide">
        <Video />
        <div className="second-slide-background">
            <div className="slide-container">
                <div className="slide-content second-slide-content">
                    <div className="slide-title second-slide-title">
                        {secondSlide.title.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                    <NavLink to={PRODUCTS_ROUTE}>
                        <button className="slide-button second-slide-button">
                            {secondSlide.button}
                        </button>
                    </NavLink>
                </div>
                <div className="second-slide-reviews">
                    <img
                        src={require('assets/images/camera-icon.svg').default}
                        alt="Camera icon"
                    />
                    <p>{secondSlide.videoTitle}</p>
                </div>
            </div>
        </div>
    </section>
);

export default SecondSlide;

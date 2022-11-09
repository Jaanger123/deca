import { NavLink } from 'react-router-dom';
import Video from './Video';
import React from 'react';

import './Slides.scss';

const SecondSlide = () => {
    return (
        <section className="second-slide">
            <Video />
            <div className="second-slide-background">
                <div className="slide-container">
                    <div className="slide-content second-slide-content">
                        <h1 className="slide-title second-slide-title">
                            A new way
                            <br />
                            to perceive games
                        </h1>
                        <NavLink to="#">
                            <button className="slide-button second-slide-button">
                                EXPLORE
                            </button>
                        </NavLink>
                    </div>
                    <div className="second-slide-reviews">
                        <img
                            src={
                                require('../../../assets/images/camera-icon.svg')
                                    .default
                            }
                            alt="Camera icon"
                        />
                        <p>AUCA TSI - Reviews</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondSlide;

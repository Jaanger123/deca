import { EffectCoverflow, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import React from 'react';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';

import './Slides.scss';
import swiperBreakpoints from './swiperStyle';

const ThirdSlide = () => {
    return (
        <section className="slide">
            <div className="slide-container">
                <div className="slide-content">
                    <h1 className="slide-title">
                        Our site has a
                        <br />
                        character creator!
                    </h1>
                    <p className="slide-description third-slide-description">
                        Use our easy-access character creator for your next D&D
                        game
                    </p>
                    <NavLink to="#">
                        <button className="slide-button third-slide-button">
                            CHARACTER CREATOR
                        </button>
                    </NavLink>
                </div>
                <div className="swiper-container">
                    <Swiper
                        effect={'coverflow'}
                        centeredSlides={true}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 200,
                            depth: 300,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        breakpoints={swiperBreakpoints}
                        initialSlide={1}
                        navigation={true}
                        modules={[EffectCoverflow, Navigation]}
                        className="third-slide-swiper"
                    >
                        <SwiperSlide>
                            <img
                                className="third-slide-character"
                                src={require('../../../assets/images/character-one.png')}
                                alt="Character"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="third-slide-character"
                                src={require('../../../assets/images/character-two.png')}
                                alt="Character"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="third-slide-character"
                                src={require('../../../assets/images/character-three.png')}
                                alt="Character"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ThirdSlide;

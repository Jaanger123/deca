import { EffectCoverflow, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { thirdSlide } from './helper/contentData';
import swiperBreakpoints from './swiperStyle';
import { PRODUCTS_ROUTE } from 'utils/consts';
import { NavLink } from 'react-router-dom';

import './Slides.scss';

const ThirdSlide = () => (
    <section className="slide">
        <div className="slide-container">
            <div className="slide-content">
                <div className="slide-title">
                    {thirdSlide.title.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
                <p className="slide-description third-slide-description">
                    {thirdSlide.description}
                </p>
                <NavLink to={PRODUCTS_ROUTE}>
                    <button className="slide-button third-slide-button">
                        {thirdSlide.button}
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
                            src={require('assets/images/character-one.png')}
                            alt="Character"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="third-slide-character"
                            src={require('assets/images/character-two.png')}
                            alt="Character"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="third-slide-character"
                            src={require('assets/images/character-three.png')}
                            alt="Character"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
);

export default ThirdSlide;

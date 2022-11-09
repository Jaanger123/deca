import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionOne from './SectionOneSlides';
import SectionTwo from './SectionTwoSlides';
import React from 'react';

import 'swiper/css/scrollbar';

import './Main.scss';

const Main = () => {
    return (
        <main className="home-main">
            <section className="home-section home-section-one">
                <div className="home-container">
                    <div className="home-part-title">
                        <p>GENERAL</p>
                        <hr />
                    </div>
                </div>

                <Swiper
                    followFinger={false}
                    centeredSlides={true}
                    speed={1500}
                    pagination={{
                        clickable: true,
                        bulletActiveClass: 'active-bullet',
                        bulletClass: 'bullets swiper-pagination-bullet',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="home-section-one-swiper"
                >
                    <SwiperSlide>
                        <SectionOne.FirstSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SectionOne.SecondSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SectionOne.ThirdSlide />
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className="home-section home-section-two">
                <div className="home-container">
                    <div className="home-part-title">
                        <p>RECOMMENDED GAMES</p>
                        <hr />
                    </div>

                    <div className="custom-slider">
                        <div className="custom-slide-wrapper new-game">
                            <SectionTwo.FirstSlide />
                        </div>
                        <div className="custom-slide-wrapper st-mid-slide">
                            <SectionTwo.SecondSlide />
                        </div>
                        <div className="custom-slide-wrapper">
                            <SectionTwo.ThirdSlide />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;

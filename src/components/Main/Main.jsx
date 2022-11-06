import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import React from 'react';

import './Main.scss';
import { FirstSlide, SecondSlide, ThirdSlide } from './SectionOneSlides';

const Main = () => {
    return (
        <main className="home-main">
            <section className="home-section home-section-one">
                <div className="home-container">
                    <div className="home-part-title">
                        <p>GENERAL</p>
                        <hr />
                    </div>
                    <Swiper
                        followFinger={false}
                        centeredSlides={true}
                        loop={true}
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
                            <FirstSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SecondSlide />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ThirdSlide />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="home-section home-section-two">
                <div className="home-container">
                    <div className="home-part-title">
                        <p>RECOMMENDED GAMES</p>
                        <hr />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;

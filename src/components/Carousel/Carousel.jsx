import { FirstSlide, SecondSlide, ThirdSlide } from './Slides';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import React from 'react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

import './Carousel.scss';

const Carousel = () => {
    return (
        <Swiper
            followFinger={false}
            centeredSlides={true}
            loop={true}
            speed={1500}
            // autoplay={{
            //     delay: 6000,
            //     disableOnInteraction: false,
            // }}
            navigation={false}
            pagination={{
                clickable: true,
                bulletActiveClass: 'active-bullet',
                bulletClass: 'bullets swiper-pagination-bullet',
            }}
            modules={[Autoplay, Pagination]}
            className="main-swiper"
        >
            <SwiperSlide>
                <ThirdSlide />
            </SwiperSlide>
            <SwiperSlide>
                <FirstSlide />
            </SwiperSlide>
            <SwiperSlide className="video-slide">
                <SecondSlide />
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;

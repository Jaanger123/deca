import { FirstSlide, SecondSlide, ThirdSlide } from '../Slides';
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
            // spaceBetween={30}
            followFinger={false}
            centeredSlides={true}
            loop={true}
            speed={1500}
            // autoplay={{
            //     delay: 2000,
            //     disableOnInteraction: false,
            // }}
            pagination={{
                clickable: true,
                bulletActiveClass: 'active-bullet',
                bulletClass: 'bullets swiper-pagination-bullet',
            }}
            modules={[Autoplay, Pagination]}
            className="main-swiper"
        >
            <SwiperSlide className="video-slide">
                {/* <FirstSlide /> */}
                <SecondSlide />
            </SwiperSlide>
            <SwiperSlide>
                <FirstSlide />
            </SwiperSlide>
            <SwiperSlide>
                <ThirdSlide />
                {/* <ThirdSlide /> */}
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;

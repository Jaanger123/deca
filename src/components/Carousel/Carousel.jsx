import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import './Carousel.scss';
import { FirstSlide } from '../Slides';

const Carousel = () => {
    return (
        <Swiper
            // spaceBetween={30}
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
            className="mySwiper"
        >
            <SwiperSlide>
                <FirstSlide />
            </SwiperSlide>
            <SwiperSlide>
                <h1>Hello World</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>Hello World</h1>
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;

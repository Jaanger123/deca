import { FirstSlide, SecondSlide, ThirdSlide } from './Slides';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

import './Carousel.scss';

const Carousel = () => (
    <Swiper
        followFinger={false}
        // centeredSlides={true}
        allowTouchMove={false}
        loop={true}
        speed={1500}
        autoplay={{
            delay: 6000,
            disableOnInteraction: false,
        }}
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
            <FirstSlide />
        </SwiperSlide>
        <SwiperSlide className="video-slide">
            <SecondSlide />
        </SwiperSlide>
        <SwiperSlide>
            <ThirdSlide />
        </SwiperSlide>
    </Swiper>
);

export default Carousel;

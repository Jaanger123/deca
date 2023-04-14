import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import SectionOne from './SectionOneSlides';
import SectionTwo from './SectionTwoSlides';

import 'swiper/css/scrollbar';

import './HomeMain.scss';
import GameSetList from 'components/GameSetList';

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
                    {/* <SwiperSlide>
                        <SectionOne.ThirdSlide />
                    </SwiperSlide> */}
                </Swiper>
            </section>
            <section className="home-section home-section-two">
                <div className="home-container">
                    <GameSetList />
                </div>
            </section>
        </main>
    );
};

export default Main;

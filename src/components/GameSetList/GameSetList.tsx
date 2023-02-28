import SectionTwo from 'components/HomeMain/SectionTwoSlides';

import './GameSetList.scss';

const GameSetList = () => {
    return (
        <div className="gs-list-container">
            <div className="gs-list-title">
                <p>RECOMMENDED GAMES</p>
                <hr />
            </div>

            <div className="gs-list-slider-wrapper">
                <div className="gs-list-slider">
                    <div className="gs-list-slide-wrapper new-game">
                        <SectionTwo.FirstSlide />
                    </div>
                    <div className="gs-list-slide-wrapper">
                        <SectionTwo.SecondSlide />
                    </div>
                    <div className="gs-list-slide-wrapper">
                        <SectionTwo.ThirdSlide />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameSetList;

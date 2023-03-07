import GameSet from 'components/GameSet/GameSet';
import SectionTwo from 'components/HomeMain/SectionTwoSlides';

import './GameSetList.scss';

const gameSets = [
    {
        characterImgs: [require('assets/images/character-two.png')],

        bgImg: require('assets/images/kyrgyz-flag-sm.png'),
        gameSetTitle: 'Classic game set',
        playersQuantity: '4-6',
        gameSetPrice: 1200,
        gameSetRating: 2,
    },
];

const GameSetList = () => {
    return (
        <div className="gs-list-container">
            <div className="gs-list-title">
                <p>RECOMMENDED GAMES</p>
                <hr />
            </div>

            <div className="gs-list-slider-wrapper">
                <div className="gs-list-slider">
                    {gameSets.map((gameSetObj, index) => (
                        <GameSet key={index} gameSetObj={gameSetObj} />
                    ))}
                    {/* <div className="gs-list-slide-wrapper new-game">
                        <SectionTwo.FirstSlide />
                    </div>
                    <div className="gs-list-slide-wrapper">
                        <SectionTwo.SecondSlide />
                    </div>
                    <div className="gs-list-slide-wrapper">
                        <SectionTwo.ThirdSlide />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default GameSetList;

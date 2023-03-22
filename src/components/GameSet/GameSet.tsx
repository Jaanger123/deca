import filledStar from 'assets/images/filled-star.svg';
import { GAMESET_DETAIL, GAME_ORDER_ROUTE } from 'utils/consts';
import { Link } from 'react-router-dom';

import './GameSet.scss';

interface IGameSetProps {
    gameSetObj: IGameSetObj;
}

interface IGameSetObj {
    characterImgs: Array<string>;
    bgImg: string;
    gameSetTitle: string;
    playersQuantity: string;
    gameSetRating: number;
    gameSetPrice: number;
}

const GameSet = ({
    gameSetObj: {
        characterImgs,
        bgImg,
        gameSetTitle,
        playersQuantity,
        gameSetRating,
        gameSetPrice,
    },
}: IGameSetProps) => {
    return (
        <div className="game-set">
            <div
                className="game-set-characters"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                {characterImgs.map((img, index) => {
                    return <img key={index} src={img} alt="character" />;
                })}
            </div>
            <div className="game-set-info-wrapper">
                <div className="game-set-info">
                    <div className="game-set-text">
                        {/* <Link
                            to={`${GAME_ORDER_ROUTE}?game-set=${gameSetTitle}`}
                        >
                            <h4>{gameSetTitle}</h4>
                        </Link> */}
                        <Link to={GAMESET_DETAIL}>
                            <h4>{gameSetTitle}</h4>
                        </Link>
                        <p>({playersQuantity} players)</p>
                    </div>
                    <div className="game-set-rating-price">
                        <p>{gameSetPrice}KGS</p>
                        <div className="game-set-rating">
                            {[...Array(gameSetRating)].map((_, index) => (
                                <img
                                    key={index}
                                    src={filledStar}
                                    alt="filled star"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameSet;

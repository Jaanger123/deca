import GenerateStars from 'components/GenerateStars';
import { IGameSet } from 'contexts/helpers/types';
import { GAMESET_DETAIL } from 'utils/consts';
import { Link } from 'react-router-dom';

import './GameSet.scss';

interface IGameSetProps {
    gameSetObj: IGameSet;
}

const GameSet = ({
    gameSetObj: {
        id,
        characterImgs,
        bgImg,
        gameSetTitle,
        playersQuantity,
        gameSetDifficulty,
        gameSetPrice,
    },
}: IGameSetProps) => {
    return (
        <div className="game-set">
            <div
                className="game-set-characters"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <img src={characterImgs[0]} alt="character" />
            </div>
            <div className="game-set-info-wrapper">
                <div className="game-set-info">
                    <div className="game-set-text">
                        <Link to={`${GAMESET_DETAIL}/${id}`}>
                            <h4>{gameSetTitle}</h4>
                        </Link>
                        <p>({playersQuantity} players)</p>
                    </div>
                    <div className="game-set-rating-price">
                        <p>{gameSetPrice}KGS</p>
                        <GenerateStars
                            difficulty={gameSetDifficulty}
                            className="game-set-difficulty"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameSet;

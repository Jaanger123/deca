import { useGameSet } from 'contexts/GameSetContextProvider';
import GameSet from 'components/GameSet/GameSet';

import './GameSetList.scss';

interface IGameSetListProps {
    title?: string;
}

const GameSetList = ({ title = 'RECOMMENDED GAMES' }: IGameSetListProps) => {
    const { gameSets } = useGameSet();

    return (
        <div className="gs-list-container">
            <div className="gs-list-title">
                <p>{title}</p>
                <hr />
            </div>

            <div className="gs-list-slider-wrapper">
                <div className="gs-list-slider">
                    {gameSets.map((gameSetObj, index) => (
                        <GameSet key={index} gameSetObj={gameSetObj} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GameSetList;

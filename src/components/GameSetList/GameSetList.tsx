import { useGameSet } from "contexts/GameSetContextProvider";
import GameSet from "components/GameSet/GameSet";

import "./GameSetList.scss";

const GameSetList = () => {
    const gameSetContextValues = useGameSet();

    if (!gameSetContextValues) return null;

    const { gameSets } = gameSetContextValues;

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
                </div>
            </div>
        </div>
    );
};

export default GameSetList;

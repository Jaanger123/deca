import { GAME_ORDER_ROUTE, SIGN_UP_ROUTE } from 'utils/consts';
import { useGameSet } from 'contexts/GameSetContextProvider';
import { useAuth } from 'contexts/AuthContextProvider';
import GenerateStars from 'components/GenerateStars';
import { Link, useParams } from 'react-router-dom';
import SiteLoading from 'components/SiteLoading';
import GameSet from 'components/GameSet/GameSet';
import { useEffect } from 'react';

import './GameSetDetailsMain.scss';

const GameSetDetailsMain = () => {
    const { gameSets, gameSet, getGameSet } = useGameSet();
    const { user } = useAuth();
    const { gameSetId } = useParams();

    useEffect(() => {
        getGameSet(gameSetId as string);
    }, []);

    if (!gameSet) return <SiteLoading />;

    return (
        <div className="gs-details-main-wrapper">
            <div className="gs-details-main">
                <div className="gs-details-container">
                    {/* GAME SET CHARACTERISTICS START */}
                    <div className="gs-details-main-info-wrapper">
                        <div className="gs-details-current-gs">
                            <p>
                                Game sets / <span>{gameSet.gameSetTitle}</span>
                            </p>
                        </div>
                        <div className="gs-details-main-info">
                            <div className="gs-details-images">
                                <div className="gs-details-main-image">
                                    <img
                                        src={require('assets/images/manas.png')}
                                        alt=""
                                    />
                                </div>
                                <div className="gs-details-sub-images">
                                    <div className="gs-details-sub-image">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="gs-details-sub-image">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="gs-details-sub-image">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="gs-details-sub-image">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="gs-details-text">
                                <div className="gs-details-title-price-wrapper">
                                    <div className="gs-details-title-price">
                                        <h2>{gameSet.gameSetTitle}</h2>
                                        <span>{gameSet.gameSetPrice} KGS</span>
                                    </div>
                                    <p>{gameSet.description}</p>
                                </div>

                                <div className="gs-details-characteristics-button">
                                    <div className="gs-details-characteristics-wrapper">
                                        <h4>Characteristics:</h4>
                                        <div className="gs-details-characteristics">
                                            <div className="gs-details-characteristic">
                                                <span>Player capacity</span>
                                                <span>
                                                    {gameSet.playersQuantity}{' '}
                                                    players
                                                </span>
                                            </div>
                                            <div className="gs-details-characteristic">
                                                <span>Difficulty</span>
                                                <div className="gs-details-characteristic-difficulty">
                                                    <span>Normal</span>
                                                    <GenerateStars
                                                        difficulty={
                                                            gameSet.gameSetDifficulty
                                                        }
                                                        className={
                                                            'gs-details-characteristic-difficulty-stars'
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="gs-details-characteristic">
                                                <span>Length</span>
                                                <span>
                                                    {gameSet.gameDuration}
                                                </span>
                                            </div>
                                            <div className="gs-details-characteristic">
                                                <span>Theme</span>
                                                <span>{gameSet.gameTheme}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gs-details-button">
                                        {user ? (
                                            <Link
                                                to={`${GAME_ORDER_ROUTE}?game-set=${gameSet.gameSetTitle}`}
                                            >
                                                <button>Buy now</button>
                                            </Link>
                                        ) : (
                                            <Link to={SIGN_UP_ROUTE}>
                                                <button>Register now</button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* GAME SET CHARACTERISTICS END */}

                    {/* GAME SET WHAT'S INCLUDED START */}
                    <div className="gs-details-included">
                        <h3>WHAT’S INCLUDED</h3>
                        <ul>
                            <li>
                                A custom-designed game board featuring
                                illustrations and symbols from the Legend of
                                Manas
                            </li>
                            <li>
                                6 unique character cards representing key
                                figures from the story, each with their own
                                strengths and weaknesses
                            </li>
                            <li>
                                A set of custom-designed dice for resolving
                                conflicts and determining outcomes
                            </li>
                            <li>
                                A guidebook detailing the rules of the game and
                                providing additional information about the
                                Legend of Manas
                            </li>
                            <li>
                                A set of resource tokens representing the
                                various materials and resources found in the
                                Kyrgyz steppe, which players must collect and
                                manage in order to win the game
                            </li>
                        </ul>
                    </div>
                    {/* GAME SET WHAT'S INCLUDED END */}

                    {/* SIMILAR GAME SETS START */}
                    <div className="gs-details-similar">
                        <h3>SIMILAR GAME SETS</h3>
                        <div className="gs-details-similar-game-sets">
                            {gameSets.map((gameSet, index) => (
                                <GameSet key={index} gameSetObj={gameSet} />
                            ))}
                        </div>
                    </div>
                    {/* SIMILAR GAME SETS END */}
                </div>
            </div>
        </div>
    );
};

export default GameSetDetailsMain;

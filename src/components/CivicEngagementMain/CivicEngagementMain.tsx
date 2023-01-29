import './CivicEngagementMain.scss';
import { text } from './helper/data';

const CivicEngagementMain = () => {
    return (
        <main className="civic-main">
            <section className="civic-header">
                <div className="civic-header-text">
                    <h1>Civic Engagement</h1>
                    <p>Is crucial for the success of any community project.</p>
                </div>
                <a href="#civic-us">
                    <div className="civic-arrow">
                        <img
                            src={
                                require('../../assets/images/arrow.svg').default
                            }
                            alt="Arrow icon"
                        />
                    </div>
                </a>
            </section>
            <section className="civic-content">
                <div className="civic-container" id="civic-us">
                    <div className="civic-civic-engagement">
                        <img
                            src={
                                require('../../assets/images/earth.svg').default
                            }
                            alt="Earth icon"
                        />
                        <div className="civic-civic-engagement-text">
                            {text.map(({ title }) => (
                                <p>{title}</p>
                            ))}
                        </div>
                    </div>
                    {/* <div className="civic-contribution-to-society-wrapper"> */}
                    <div className="civic-card-wrapper">
                        <p className="civic-subtitle">
                            Contribution to society
                        </p>
                        <div className="civic-contribution-to-society">
                            <p>
                                Bacon ipsum dolor sit amet salami jowl corned
                                beef, andouille flank tongue ball tip kielbasa
                                pastrami tri-tip meatloaf short loin beef
                                biltong. Cow bresaola ground round strip steak
                                fatback meatball shoulder leberkas pastrami
                                sausage corned beef t-bone pork belly drumstick.
                            </p>
                        </div>
                    </div>
                    {/* <div className="civic-how-we-help-wrapper"> */}
                    <div className="civic-card-wrapper">
                        <p className="civic-subtitle">How we help</p>
                        <div className="civic-how-we-help">
                            <p>
                                Secondary fermentation degrees plato units of
                                bitterness, cask conditioned ale ibu real ale
                                pint glass craft beer. krausen goblet grainy ibu
                                brewhouse lagering finishing hops. Trappist,
                                black malt chocolate malt balthazar gravity
                                dextrin saccharification trappist final gravity.
                                Aau scotch ale, adjunct. hops bung infusion,
                                cask conditioning pitching malt extract.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CivicEngagementMain;

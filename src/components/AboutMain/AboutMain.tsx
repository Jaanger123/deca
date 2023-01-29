import { Link } from 'react-router-dom';
import './AboutMain.scss';

const AboutMain = () => {
    return (
        <main className="about-main">
            <section className="about-welcome">
                <h1>Welcome to DECA</h1>
                <p>
                    An innovative and enjoyable way of spending time with
                    friends
                </p>
                <img
                    src={
                        require('../../assets/images/welcome-characters.svg')
                            .default
                    }
                    alt="Deca staff"
                />
                <a href="#about-us">
                    <div className="about-arrow">
                        <img
                            src={
                                require('../../assets/images/arrow.svg').default
                            }
                            alt="Arrow"
                        />
                    </div>
                </a>
            </section>
            <section className="about-content">
                <div className="about-container" id="about-us">
                    <div className="about-us">
                        <h3>About us</h3>
                        <div className="about-us-text">
                            <p>
                                We are a team of students united by one common
                                goal, to provide a pleasant experience for our
                                clients.
                            </p>
                            <p>
                                We are enthusiasts from various fields of
                                activity, and we will try to give our best for
                                the implementation of our plans!
                            </p>
                        </div>
                    </div>
                    <div className="about-our-goal-wrapper">
                        <div className="about-character">
                            <img
                                src={require('../../assets/images/character-two.png')}
                                alt="Manas"
                            />
                        </div>
                        <div className="about-our-goal">
                            <p>
                                Our goal is to hold board and table-role games
                                in order to provide a very exciting form of
                                leisure.
                            </p>
                            <p>
                                In a nutshell, Tabletop RPGs are game sessions
                                of an hour and a half, where our narrator will
                                provide the players with an immersive story
                                where they will be in the lead roles.
                            </p>
                            <p>
                                The possibilities of the players are only
                                limited by their imagination, and the same
                                story, with different players, will always
                                create something unique.
                            </p>
                        </div>
                    </div>
                    <div className="about-success-wrapper">
                        <div className="about-success">
                            <p>
                                The whole project is carried out within the
                                framework of interdisciplinary student work, for
                                the completion of which we need to use our
                                skills and capabilities to the maximum and
                                increase the chances of the project being
                                successful.
                            </p>
                        </div>
                        <Link to="/sign-up">
                            <button>Register now</button>
                        </Link>
                    </div>
                    <div className="about-collaboration">
                        <p>In collaboration with</p>
                        <img
                            src={
                                require('../../assets/images/auca.svg').default
                            }
                            alt="Auca"
                        />
                        <img
                            src={
                                require('../../assets/images/tsi-auca.svg')
                                    .default
                            }
                            alt="Technical school of inovation auca"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutMain;

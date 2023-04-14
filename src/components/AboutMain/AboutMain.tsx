import { bodyText, headerText } from './helper/contentData';
import { SIGN_UP_ROUTE } from 'utils/consts';
import { Link } from 'react-router-dom';

import './AboutMain.scss';

const AboutMain = () => (
    <main className="about-main">
        <section className="about-welcome">
            <h1>{headerText.title}</h1>
            <p>{headerText.description}</p>
            <img
                src={require('assets/images/welcome-characters.svg').default}
                alt="Deca staff"
            />
            <a href="#about-us">
                <div className="about-arrow">
                    <img
                        src={require('assets/images/arrow.svg').default}
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
                        {bodyText.firstBlock.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
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
                        {bodyText.secondBlock.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                </div>
                <div className="about-success-wrapper">
                    <div className="about-success">
                        {bodyText.thirdBlock.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                    <Link to={SIGN_UP_ROUTE}>
                        <button>Register now</button>
                    </Link>
                </div>
                <div className="about-collaboration">
                    <p>In collaboration with</p>
                    <img
                        src={require('assets/images/auca.svg').default}
                        alt="AUCA"
                    />
                    <img
                        src={require('assets/images/tsi-auca.svg').default}
                        alt="Technical school of inovation AUCA"
                    />
                </div>
            </div>
        </section>
    </main>
);

export default AboutMain;

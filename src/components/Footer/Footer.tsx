import RegisterBanner from 'components/RegisterBanner';
import { useAuth } from 'contexts/AuthContextProvider';
import { INSTAGRAM } from './helpers/links';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
    const { user } = useAuth();

    return (
        <>
            {!user && <RegisterBanner />}
            <footer>
                <div className="footer-container">
                    <p className="footer-p">Found anything interesting?</p>
                    <div className="footer-contacts">
                        <div className="footer-email">
                            <p>deca10@gmail.com</p>
                            <hr />
                        </div>
                        {/* <Link to="sign-up">
                            <button>Register now</button>
                        </Link> */}
                        <div className="footer-number">
                            <p>+996 707 080 904</p>
                            <hr />
                            <span>rd. Mederova 161a</span>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-social">
                        <a href={INSTAGRAM} target="_blank">
                            <img
                                className="instagram-icon"
                                src={
                                    require('assets/images/instagram-icon.svg')
                                        .default
                                }
                                alt="Instagram"
                            />
                        </a>
                        {/* <a href={INSTAGRAM} target="_blank">
                            <img
                                className="twitter-icon"
                                src={
                                    require('assets/images/twitter-icon.svg')
                                        .default
                                }
                                alt="Twitter"
                            />
                        </a>
                        <a href={INSTAGRAM} target="_blank">
                            <img
                                className="facebook-icon"
                                src={
                                    require('assets/images/facebook-icon.svg')
                                        .default
                                }
                                alt="Facebook"
                            />
                        </a> */}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

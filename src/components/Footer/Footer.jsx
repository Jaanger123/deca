import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <p className="footer-p">Found anything interesting?</p>
                <div className="footer-contacts">
                    <div className="footer-email">
                        <p>deca10@gmail.com</p>
                        <hr />
                    </div>
                    <button>Register now</button>
                    <div className="footer-number">
                        <p>+996 707 080 904</p>
                        <hr />
                        <span>rd. Mederova 161a</span>
                    </div>
                </div>
                <hr />
                <div className="footer-payment-social">
                    <div className="footer-payment">
                        <img
                            className="apple-pay-icon"
                            src={
                                require('../../assets/images/apple-pay.svg')
                                    .default
                            }
                            alt="ApplePay"
                        />
                        <img
                            className="pay-pal-icon"
                            src={
                                require('../../assets/images/pay-pal.svg')
                                    .default
                            }
                            alt="PayPal"
                        />
                    </div>

                    <div className="footer-social">
                        <img
                            className="instagram-icon"
                            src={
                                require('../../assets/images/instagram-icon.svg')
                                    .default
                            }
                            alt="Instagram"
                        />
                        <img
                            className="twitter-icon"
                            src={
                                require('../../assets/images/twitter-icon.svg')
                                    .default
                            }
                            alt="Twitter"
                        />
                        <img
                            className="facebook-icon"
                            src={
                                require('../../assets/images/facebook-icon.svg')
                                    .default
                            }
                            alt="Facebook"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

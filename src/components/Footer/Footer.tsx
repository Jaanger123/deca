import { INSTAGRAM_LINK, footerData } from './helpers/contacts';
import RegisterBanner from 'components/RegisterBanner';
import { useAuth } from 'contexts/AuthContextProvider';

import './Footer.scss';

const Footer = () => {
    const { user } = useAuth();

    return (
        <>
            {!user && <RegisterBanner />}
            <footer>
                <div className="footer-container">
                    <p className="footer-p">{footerData.title}</p>
                    <div className="footer-contacts">
                        <div className="footer-email">
                            <p>{footerData.contacts.email}</p>
                            <hr />
                        </div>
                        <div className="footer-number">
                            <p>{footerData.contacts.phoneNumber}</p>
                            <hr />
                            <span>{footerData.contacts.address}</span>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-social">
                        <a href={INSTAGRAM_LINK} target="_blank">
                            <img
                                className="instagram-icon"
                                src={
                                    require('assets/images/instagram-icon.svg')
                                        .default
                                }
                                alt="Instagram"
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

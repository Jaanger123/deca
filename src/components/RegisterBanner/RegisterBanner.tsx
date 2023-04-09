import { SIGN_UP_ROUTE } from 'utils/consts';
import { Link } from 'react-router-dom';

import './RegisterBanner.scss';

const RegisterBanner = () => {
    return (
        <div className="banner-background">
            <img
                src={require('assets/images/banner-bubbles-left.svg').default}
                alt="bubbles"
            />
            <div className="banner-register">
                <h2>Register to a game now!</h2>
                <Link to={SIGN_UP_ROUTE}>
                    <button>Resgiter</button>
                </Link>
            </div>
            <img
                src={require('assets/images/banner-bubbles-right.svg').default}
                alt="bubbles"
            />
        </div>
    );
};

export default RegisterBanner;

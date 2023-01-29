// import './AuthMain.scss';
import 'components/AuthMain/AuthMain.scss';
import { Link } from 'react-router-dom';

const AuthMain = () => {
    return (
        <div className="auth-main">
            <div className="auth">
                <div className="auth-banner">
                    <img
                        src={
                            require('../../assets/images/auth-banner.svg')
                                .default
                        }
                        alt="Players banner"
                    />
                    <h4>Explore new adventures with the ones you love!</h4>
                    <p>Innovative board games now in Kyrgyzstan!</p>
                </div>
                <div className="auth-form-wrapper">
                    <h2>Welcome!</h2>
                    <div className="auth-form">
                        <div className="auth-form-inputs">
                            <div className="form-input">
                                <span>Surname</span>
                                <input type="email" />
                            </div>
                            <div className="form-input">
                                <span>Password</span>
                                <input type="password" />
                            </div>
                        </div>
                        <div className="form-buttons">
                            <button className="auth-sign-in-up">Sign up</button>
                            <span>OR</span>
                            <button className="auth-sign-in-up-google">
                                <img
                                    src={
                                        require('../../assets/images/google-icon.svg')
                                            .default
                                    }
                                />
                                Sign up with Google
                            </button>
                        </div>
                    </div>
                    <span>
                        Already have an account?{' '}
                        <Link to="/sign-in">Sign in</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AuthMain;

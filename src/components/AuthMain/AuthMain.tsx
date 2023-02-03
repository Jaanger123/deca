import { Link, useLocation } from 'react-router-dom';
// import './AuthMain.scss';
import 'components/AuthMain/AuthMain.scss';

const AuthMain = () => {
    const location = useLocation();
    const hasUser = location.pathname === '/sign-in';

    return (
        <div className="auth-main">
            <div className="auth">
                <div className="auth-banner">
                    <img
                        src={require('assets/images/auth-banner.svg').default}
                        alt="Players banner"
                    />
                    <h4>Explore new adventures with the ones you love!</h4>
                    <p>Innovative board games now in Kyrgyzstan!</p>
                </div>
                <div className="auth-form-wrapper">
                    <h2>{hasUser ? 'Welcome back!' : 'Welcome!'}</h2>
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
                            <button className="auth-sign-in-up">
                                {hasUser ? 'Sign in' : 'Sign up'}
                            </button>
                            <span>OR</span>
                            <button className="auth-sign-in-up-google">
                                <img
                                    src={
                                        require('assets/images/google-icon.svg')
                                            .default
                                    }
                                />
                                {hasUser ? 'Sign in' : 'Sign up'} with Google
                            </button>
                        </div>
                    </div>
                    <span>
                        {hasUser
                            ? 'Don’t have an account? '
                            : 'Already have an account? '}
                        <Link to={hasUser ? '/sign-up' : '/sign-in'}>
                            {hasUser ? 'Sign up' : 'Sign in'}
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AuthMain;

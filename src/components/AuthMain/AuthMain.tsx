import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from 'utils/consts';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { useAuth } from 'contexts/AuthContextProvider';
import PopupModal from 'components/PopupModal';
import eyeOpened from 'assets/images/eye-opened.png';
import eyeClosed from 'assets/images/eye-closed.png';

// import './AuthMain.scss';
import 'components/AuthMain/AuthMain.scss';
import Loading from 'components/Loading';

const AuthMain = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();

    const hasUser = location.pathname === SIGN_IN_ROUTE;

    const authContextValues = useAuth();

    if (!authContextValues) return null;

    const {
        signUp,
        signIn,
        signUpInGoogle,
        showPopup,
        setShowPopup,
        errorMessage,
        emailError,
        passwordError,
        loadingBtn,
        loadingGoogleBtn,
    } = authContextValues;

    const authHandler = (email: string, password: string) => {
        if (location.pathname === SIGN_UP_ROUTE) {
            signUp(email, password);
        } else {
            signIn(email, password);
        }
    };

    return (
        <>
            <PopupModal
                errorMessage={errorMessage}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
            />
            <div className="auth-main">
                <div className="auth">
                    <div className="auth-banner">
                        <img
                            src={
                                require('assets/images/auth-banner.svg').default
                            }
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
                                    <span>Email</span>
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    {emailError && (
                                        <span className="error-message">
                                            {emailError}
                                        </span>
                                    )}
                                </div>
                                <div className="form-input">
                                    <span>Password</span>
                                    <div className="auth-password-input">
                                        <input
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <img
                                            onClick={() =>
                                                setShowPassword((prev) => !prev)
                                            }
                                            src={
                                                showPassword
                                                    ? eyeClosed
                                                    : eyeOpened
                                            }
                                            alt=""
                                        />
                                    </div>
                                    {passwordError && (
                                        <span className="error-message">
                                            {passwordError}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="form-buttons">
                                <button
                                    className={`auth-sign-in-up ${
                                        loadingBtn ? 'loading' : ''
                                    }`}
                                    onClick={() => authHandler(email, password)}
                                >
                                    {loadingBtn ? (
                                        <Loading />
                                    ) : hasUser ? (
                                        'Sign in'
                                    ) : (
                                        'Sign up'
                                    )}
                                </button>
                                <span>OR</span>
                                <button
                                    className={`auth-sign-in-up-google ${
                                        loadingGoogleBtn ? 'loading' : ''
                                    }`}
                                    onClick={() => signUpInGoogle()}
                                >
                                    {!loadingGoogleBtn && (
                                        <img
                                            src={
                                                require('assets/images/google-icon.svg')
                                                    .default
                                            }
                                        />
                                    )}
                                    {loadingGoogleBtn ? (
                                        <Loading />
                                    ) : hasUser ? (
                                        'Sign in with Google'
                                    ) : (
                                        'Sign up with Google'
                                    )}
                                </button>
                            </div>
                        </div>
                        <span>
                            {hasUser
                                ? 'Don’t have an account? '
                                : 'Already have an account? '}
                            <Link to={hasUser ? SIGN_UP_ROUTE : SIGN_IN_ROUTE}>
                                {hasUser ? 'Sign up' : 'Sign in'}
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthMain;

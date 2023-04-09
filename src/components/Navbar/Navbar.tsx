import { ABOUT_ROUTE, CIVIC_ENGAGEMENT_ROUTE } from 'utils/consts';
import { useAuth } from 'contexts/AuthContextProvider';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
    const { user, signOutAccount } = useAuth();

    return (
        <nav>
            <div className="nav-wrapper">
                <NavLink to="/">
                    <img
                        className="nav-logo"
                        src={require('../../assets/images/logo.svg').default}
                        alt="Deca logo"
                    />
                </NavLink>
                <div className="nav-buttons">
                    <ul>
                        <li>
                            <NavLink to={ABOUT_ROUTE}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={CIVIC_ENGAGEMENT_ROUTE}>
                                Civic Engagement
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Products</NavLink>
                        </li>
                    </ul>
                    <div className="nav-auth-buttons">
                        {user ? (
                            <>
                                <p>{user.email}</p>
                                <button
                                    onClick={() => signOutAccount()}
                                    className="nav-sign-out"
                                >
                                    Sign out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="sign-in">
                                    <button className="nav-sign-in">
                                        Sign in
                                    </button>
                                </Link>
                                <Link to="sign-up">
                                    <button className="nav-sign-up">
                                        Sign up
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

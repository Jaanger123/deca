import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
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
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/civic-engagement">
                                Civic Engagement
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Products</NavLink>
                        </li>
                    </ul>
                    <div className="nav-auth-buttons">
                        <button className="nav-sign-in">Sign in</button>
                        <button className="nav-sign-up">Sign up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

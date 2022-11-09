import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <img
                    className="nav-logo"
                    src={require('../../assets/images/logo.svg').default}
                    alt="Deca logo"
                />
                <div className="nav-buttons">
                    <ul>
                        <li>
                            <NavLink to="#">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Civic Engagement</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Products</NavLink>
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

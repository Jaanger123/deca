import React from 'react';
import Carousel from '../Carousel';
import Navbar from '../Navbar';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <Navbar />
            <Carousel />
        </header>
    );
};

export default Header;

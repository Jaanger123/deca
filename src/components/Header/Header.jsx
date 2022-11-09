import Carousel from '../Carousel';
import Navbar from '../Navbar';
import React from 'react';

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

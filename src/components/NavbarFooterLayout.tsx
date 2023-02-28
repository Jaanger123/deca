import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

const NavbarFooterLayout = () => (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
);

export default NavbarFooterLayout;

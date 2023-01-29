import { Routes, Route, Navigate } from 'react-router-dom';
import CivicEngagement from '../pages/CivicEngagement';
import NavbarFooterLayout from './NavbarFooterLayout';
import { Home, About, GameOrder } from '../pages';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Auth from '../pages/Auth';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<NavbarFooterLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/civic-engagement" element={<CivicEngagement />} />
                <Route path="/game-order" element={<GameOrder />} />
            </Route>
            <Route path="/sign-up" element={<Auth />} />
            <Route path="/sign-in" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;

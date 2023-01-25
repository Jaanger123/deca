import { Routes, Route, Navigate } from 'react-router-dom';
import NavbarFooterLayout from './NavbarFooterLayout';
import { Home, About, Register } from '../pages';
import CivicEngagement from '../pages/CivicEngagement';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<NavbarFooterLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/civic-engagement" element={<CivicEngagement />} />
                <Route path="/register" element={<Register />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;

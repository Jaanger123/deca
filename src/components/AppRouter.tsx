import { Routes, Route, Navigate } from 'react-router-dom';
import NavbarFooterLayout from './NavbarFooterLayout';
import { Home, About, Register } from '../pages';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<NavbarFooterLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;

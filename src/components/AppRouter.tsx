import { Routes, Route, Navigate } from 'react-router-dom';
import CivicEngagement from '../pages/CivicEngagement';
import NavbarFooterLayout from './NavbarFooterLayout';
import { Home, About, GameOrder } from '../pages';
import Auth from '../pages/Auth';
import {
    ABOUT_ROUTE,
    CIVIC_ENGAGEMENT_ROUTE,
    GAME_ORDER_ROUTE,
    HOME_ROUTE,
    SIGN_IN_ROUTE,
    SIGN_UP_ROUTE,
} from 'utils/consts';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<NavbarFooterLayout />}>
                <Route index element={<Home />} />
                <Route path={ABOUT_ROUTE} element={<About />} />
                <Route
                    path={CIVIC_ENGAGEMENT_ROUTE}
                    element={<CivicEngagement />}
                />
                <Route path={GAME_ORDER_ROUTE} element={<GameOrder />} />
            </Route>
            <Route path={SIGN_UP_ROUTE} element={<Auth />} />
            <Route path={SIGN_IN_ROUTE} element={<Auth />} />
            <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;

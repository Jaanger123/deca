import { Routes, Route, Navigate } from 'react-router-dom';
import NavbarFooterLayout from './NavbarFooterLayout';
import {
    CivicEngagement,
    GameOrder,
    NotFound,
    About,
    Auth,
    Home,
    GameSetDetail,
} from 'pages';
import {
    ABOUT_ROUTE,
    CIVIC_ENGAGEMENT_ROUTE,
    GAMESET_DETAIL,
    GAME_ORDER_ROUTE,
    HOME_ROUTE,
    PRODUCTS_ROUTE,
    SIGN_IN_ROUTE,
    SIGN_UP_ROUTE,
} from 'utils/consts';
import SiteLoading from './SiteLoading';
import { useAuth } from 'contexts/AuthContextProvider';
import Products from 'pages/Products';

const AppRouter = () => {
    const authContextValues = useAuth();

    if (!authContextValues) return null;

    const { siteLoading } = authContextValues;

    if (siteLoading) {
        return (
            <Routes>
                <Route path={'*'} element={<SiteLoading />} />;
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<NavbarFooterLayout />}>
                <Route index element={<Home />} />
                <Route path={ABOUT_ROUTE} element={<About />} />
                <Route
                    path={CIVIC_ENGAGEMENT_ROUTE}
                    element={<CivicEngagement />}
                />
                <Route path={PRODUCTS_ROUTE} element={<Products />} />
                <Route path={GAMESET_DETAIL} element={<GameSetDetail />} />
                <Route path={GAME_ORDER_ROUTE} element={<GameOrder />} />
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path={SIGN_UP_ROUTE} element={<Auth />} />
            <Route path={SIGN_IN_ROUTE} element={<Auth />} />
        </Routes>
    );
};

export default AppRouter;

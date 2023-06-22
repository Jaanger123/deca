import {
    COMPLETE_PAYMENT_ROUTE,
    CIVIC_ENGAGEMENT_ROUTE,
    GAMESET_DETAIL_FULL,
    screenResolutions,
    GAME_ORDER_ROUTE,
    PRODUCTS_ROUTE,
    SIGN_IN_ROUTE,
    SIGN_UP_ROUTE,
    ABOUT_ROUTE,
    HOME_ROUTE,
} from 'utils/consts';
import {
    UnsupportedDevice,
    CivicEngagement,
    GameSetDetails,
    OrderComplete,
    GameOrder,
    NotFound,
    About,
    Auth,
    Home,
} from 'pages';
import { useAuth } from 'contexts/AuthContextProvider';
import NavbarFooterLayout from './NavbarFooterLayout';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import SiteLoading from './SiteLoading';
import Products from 'pages/Products';
import { useState } from 'react';

const AppRouter = () => {
    const { siteLoading } = useAuth();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));

    if (siteLoading) return <SiteLoading />;

    if (screenWidth < screenResolutions.tablet) return <UnsupportedDevice />;

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
                <Route
                    path={GAMESET_DETAIL_FULL}
                    element={<GameSetDetails />}
                />
                <Route element={<PrivateRoutes />}>
                    <Route path={GAME_ORDER_ROUTE}>
                        <Route index element={<GameOrder />} />
                        <Route
                            path={COMPLETE_PAYMENT_ROUTE}
                            element={<OrderComplete />}
                        />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path={SIGN_UP_ROUTE} element={<Auth />} />
            <Route path={SIGN_IN_ROUTE} element={<Auth />} />
        </Routes>
    );
};

export default AppRouter;

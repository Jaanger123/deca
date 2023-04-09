import { useAuth } from 'contexts/AuthContextProvider';
import { Navigate, Outlet } from 'react-router-dom';
import { SIGN_UP_ROUTE } from 'utils/consts';

const PrivateRoutes = () => {
    const { user } = useAuth();

    return user ? <Outlet /> : <Navigate to={SIGN_UP_ROUTE} />;
};

export default PrivateRoutes;

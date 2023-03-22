import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface IScrollToTopProps {
    children: React.ReactNode;
}

const ScrollToTop = ({ children }: IScrollToTopProps) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
};

export default ScrollToTop;

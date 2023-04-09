import GameOrderContextProvider from 'contexts/GameOrderContextProvider';
import GameSetContextProvider from 'contexts/GameSetContextProvider';
import AuthContextProvider from 'contexts/AuthContextProvider';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'components/AppRouter';

import 'assets/fonts/HelveticaNeueCyr/stylesheet.css';
import './App.scss';
import ScrollToTop from 'components/ScrollToTop';

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <GameSetContextProvider>
                    <GameOrderContextProvider>
                        <ScrollToTop>
                            <AppRouter />
                        </ScrollToTop>
                    </GameOrderContextProvider>
                </GameSetContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;

import AuthContextProvider from 'contexts/AuthContextProvider';
import { GameOrderProvider } from 'contexts/GameOrderContext';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'components/AppRouter';

import 'assets/fonts/HelveticaNeueCyr/stylesheet.css';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <GameOrderProvider>
                    <AppRouter />
                </GameOrderProvider>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;

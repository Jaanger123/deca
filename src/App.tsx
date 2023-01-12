import { GameOrderProvider } from './contexts/GameOrderContext';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

import './fonts/HelveticaNeueCyr/stylesheet.css';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <GameOrderProvider>
                <AppRouter />
            </GameOrderProvider>
        </BrowserRouter>
    );
}

export default App;

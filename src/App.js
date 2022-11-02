import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

import './fonts/HelveticaNeueCyr/stylesheet.css';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;

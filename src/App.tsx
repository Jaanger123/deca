import GameOrderContextProvider from "contexts/GameOrderContextProvider";
import GameSetContextProvider from "contexts/GameSetContextProvider";
import AuthContextProvider from "contexts/AuthContextProvider";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "components/AppRouter";

import "assets/fonts/HelveticaNeueCyr/stylesheet.css";
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <GameSetContextProvider>
                <AuthContextProvider>
                    <GameOrderContextProvider>
                        <AppRouter />
                    </GameOrderContextProvider>
                </AuthContextProvider>
            </GameSetContextProvider>
        </BrowserRouter>
    );
}

export default App;

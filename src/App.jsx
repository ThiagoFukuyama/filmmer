import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./context/FavoritesContext";

const App = () => {
    return (
        <FavoritesProvider>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </FavoritesProvider>
    );
};

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "components/navigation/NavBar";
import FavoritesProvider from "context/FavoritesContext";
import Favorites from "pages/Favorites";
import Home from "pages/Home";

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

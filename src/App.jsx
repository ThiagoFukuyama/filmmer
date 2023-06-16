import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./context/FavoritesContext";

const App = () => {
    return (
        <>
            <NavBar />
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </FavoritesProvider>
        </>
    );
};

export default App;

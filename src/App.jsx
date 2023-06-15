import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./context/FavoritesContext";

const App = () => {
    return (
        <>
            <Link to="/" style={{ marginRight: "1rem" }}>
                Home
            </Link>
            <Link to="/favorites">Favorites</Link>
            <h1 className="text-red-500 text-lg">TESTEEEE</h1>

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

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

const App = () => {
    return (
        <>
            <Link to="/" style={{ marginRight: "1rem" }}>
                Home
            </Link>
            <Link to="/favorites">Favorites</Link>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </>
    );
};

export default App;

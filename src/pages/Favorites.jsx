import MoviesContainer from "../components/MoviesContainer";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <div>
            <h1>My Favorites</h1>
            <MoviesContainer movies={favorites} />
        </div>
    );
};

export default Favorites;

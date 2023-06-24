import { useFavorites } from "../../context/FavoritesContext";
import AddFavoriteButton from "./AddFavoriteButton";
import RemoveFavoriteButton from "./RemoveFavoriteButton";

const FavoriteToggle = ({ movie }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const isFavoritedMovie = favorites.some(
        (item) => item.imdbID === movie.imdbID
    );

    return (
        <div className="absolute bottom-3 right-5 transition duration-200 hover:scale-110">
            {isFavoritedMovie ? (
                <RemoveFavoriteButton
                    removeFavorite={removeFavorite}
                    imdbID={movie.imdbID}
                />
            ) : (
                <AddFavoriteButton addFavorite={addFavorite} movie={movie} />
            )}
        </div>
    );
};

export default FavoriteToggle;

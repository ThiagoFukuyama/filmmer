import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useFavorites } from "../context/FavoritesContext";

const FavoriteButton = ({ movie }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const movieIsFavorited = favorites.some(
        (item) => item.imdbID === movie.imdbID
    );

    return (
        <div className="absolute bottom-3 right-5 transition duration-200 hover:scale-110">
            {movieIsFavorited ? (
                <button
                    title="Remove from favorites"
                    type="button"
                    onClick={() => removeFavorite(movie.imdbID)}
                >
                    <p className="sr-only">Remove from favorites</p>
                    <IoHeart size={32} color="#DD4849" />
                </button>
            ) : (
                <button
                    title="Add to favorites"
                    type="button"
                    onClick={() => addFavorite(movie)}
                >
                    <p className="sr-only">Add to favorites</p>
                    <IoHeartOutline size={32} color="#DD4849" />
                </button>
            )}
        </div>
    );
};

export default FavoriteButton;

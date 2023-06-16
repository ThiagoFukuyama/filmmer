import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useFavorites } from "../context/FavoritesContext";

const MovieCard = ({ movie }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const { imdbID, Title, Year, Poster, Type } = movie;

    let typeColor;
    switch (Type) {
        case "series":
            typeColor = "bg-[#A6378F]";
            break;

        case "game":
            typeColor = "bg-[#CF445B]";
            break;

        default:
            typeColor = "bg-[#E74C3C]";
            break;
    }

    return (
        <div className="relative w-[300px] min-h-[500px] bg-dark-gray-100 rounded-md overflow-hidden transition duration-300 hover:scale-[1.025]">
            <img
                className="w-full h-[300px] object-cover"
                src={
                    Poster !== "N/A"
                        ? Poster
                        : "https://via.placeholder.com/400"
                }
            />
            <div className="p-5">
                <div className="flex">
                    <h2 className="text-xl font-bold">{Title}</h2>
                </div>
                <p className="text-gray-400 mt-3">{Year}</p>
                <p
                    className={`${typeColor} w-fit text-sm font-bold rounded-md mt-4 p-2 pt-1`}
                >
                    {Type}
                </p>

                <div className="absolute bottom-3 right-5">
                    {favorites.some((item) => item.imdbID === imdbID) ? (
                        <button
                            title="Remove from favorites"
                            type="button"
                            onClick={() => removeFavorite(imdbID)}
                        >
                            <p className="sr-only">Remove from favorites</p>
                            <IoHeart size={32} color="#f54e5f" />
                        </button>
                    ) : (
                        <button
                            title="Add to favorites"
                            type="button"
                            onClick={() => addFavorite(movie)}
                        >
                            <p className="sr-only">Add to favorites</p>
                            <IoHeartOutline size={32} color="#f54e5f" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;

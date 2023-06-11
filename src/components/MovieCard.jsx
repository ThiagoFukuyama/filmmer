import { useFavorites } from "../context/FavoritesContext";

const MovieCard = ({ movie: { imdbID, Title, Year, Poster, Type } }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    let typeColor;
    switch (Type) {
        case "movie":
            typeColor = "#E74C3C";
            break;

        case "series":
            typeColor = "#A6378F";
            break;

        case "game":
            typeColor = "#CF445B";
            break;

        default:
            typeColor = "#CF445B";
            break;
    }

    return (
        <>
            <div>
                <div>
                    <img
                        src={
                            Poster !== "N/A"
                                ? Poster
                                : "https://via.placeholder.com/400"
                        }
                    />
                    <div>
                        <div>
                            <h2>{Title}</h2>

                            <p>{Year}</p>

                            <p>{Type}</p>
                            {favorites.some(
                                (item) => item.imdbID === imdbID
                            ) ? (
                                <button
                                    type="button"
                                    onClick={() => removeFavorite(imdbID)}
                                >
                                    Remover
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() =>
                                        addFavorite({
                                            imdbID,
                                            Title,
                                            Year,
                                            Poster,
                                            Type,
                                        })
                                    }
                                >
                                    Adicionar
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieCard;

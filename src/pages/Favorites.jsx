import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
    const { favorites, setFavorites } = useFavorites();

    const addFavorite = (item) => {
        setFavorites((prevFavorites) => {
            return [...prevFavorites, item].filter((value, index, self) => {
                return (
                    index === self.findIndex((t) => t.imdbID === value.imdbID)
                );
            });
        });
    };

    console.log(favorites);

    return (
        <>
            <button type="button" onClick={() => addFavorite({ imdbID: 4 })}>
                Adicionar Aos Favoritos
            </button>
            <div>{favorites?.toString()}</div>
        </>
    );
};

export default Favorites;

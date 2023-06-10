import React, { useState, useContext } from "react";

const FavoritesContext = React.createContext();

export const useFavorites = () => {
    return useContext(FavoritesContext);
};

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([
        { imdbID: 1 },
        { imdbID: 2 },
        { imdbID: 3 },
    ]);

    return (
        <FavoritesContext.Provider
            value={{ favorites: favorites, setFavorites: setFavorites }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;

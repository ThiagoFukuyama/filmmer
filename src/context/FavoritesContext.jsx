import React, { useState, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = React.createContext();

export const useFavorites = () => {
    return useContext(FavoritesContext);
};

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useLocalStorage("favorites", []);

    const addFavorite = (item) => {
        setFavorites((prevFavorites) => {
            return [...prevFavorites, item].filter((value, index, self) => {
                return (
                    index === self.findIndex((t) => t.imdbID === value.imdbID)
                );
            });
        });
    };

    const removeFavorite = (imdbID) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((item) => item.imdbID !== imdbID)
        );
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;

import { useMemo, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useMovies = () => {
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const abortController = new AbortController();

    function searchMovie(title = "") {
        fetch(`https://www.omdbapi.com?apikey=5dfc069&s=${title || "Sword"}`, {
            signal: abortController.signal,
        })
            .then((response) => {
                if (!response.ok) throw new Error();
                return response.json();
            })
            .then((data) => setMovies(data.Search))
            .catch(() => setError(true))
            .finally(() => setIsLoading(false));
    }

    searchMovie.abort = () => abortController.abort();

    const debouncedSearchMovie = useMemo(() => useDebounce(searchMovie), []);

    return { movies, isLoading, error, searchMovie, debouncedSearchMovie };
};

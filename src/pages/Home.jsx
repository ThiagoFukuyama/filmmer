import { useState, useEffect, useMemo } from "react";
import { useDebounce } from "../hooks/useDebounce";
import Heading from "../components/Heading";
import Container from "../components/Container";
import MainTitle from "../components/MainTitle";
import SearchBar from "../components/SearchBar";
import LoadingScreen from "../components/LoadingScreen";
import MoviesContainer from "../components/MoviesContainer";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const searchMovie = (title = "") => {
        fetch(`https://www.omdbapi.com?apikey=5dfc069&s=${title || "Sword"}`)
            .then((response) => {
                if (!response.ok) throw new Error();
                return response.json();
            })
            .then((data) => setMovies(data.Search))
            .catch(() => setError(true))
            .finally(() => setIsLoading(false));
    };

    const debouncedSearchMovie = useMemo(() => useDebounce(searchMovie), []);

    useEffect(() => {
        searchMovie();
        return () => debouncedSearchMovie.cancel();
        /* React Strict Mode parece afetar o uso do AbortController na cleanup do useEffect, em um projeto real melhor utilizar algo como React Query para lidar com isso */
    }, []);

    const handleOnChange = ({ target: { value } }) => {
        setSearchQuery(value);
        debouncedSearchMovie(value.trim());
    };

    return (
        <Container>
            <MainTitle>Filmmer</MainTitle>
            <SearchBar value={searchQuery} onChange={handleOnChange} />
            <div className="relative">
                {isLoading && <LoadingScreen />}
                {error ? (
                    <Heading className="text-center">
                        Sorry, something went wrong. Please try again later.
                    </Heading>
                ) : (
                    <MoviesContainer
                        movies={movies}
                        emptyMessage={"No results found"}
                    />
                )}
            </div>
        </Container>
    );
};

export default Home;

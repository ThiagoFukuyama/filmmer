import { useCallback, useEffect, useMemo, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import Container from "../components/Container";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import MoviesContainer from "../components/MoviesContainer";
import MainTitle from "../components/MainTitle";
import LoadingScreen from "../components/LoadingScreen";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        searchMovie();
    }, []);

    const searchMovie = useCallback(async (title = "") => {
        try {
            const response = await fetch(
                `https://www.omdbapi.com?apikey=5dfc069&s=${title || "Sword"}`
            );
            if (!response.ok) {
                throw new Error();
            }
            const data = await response.json();
            setMovies(data.Search);
        } catch (e) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const debouncedSearchMovie = useMemo(() => {
        return useDebounce(searchMovie);
    }, [searchMovie]);

    const handleOnChange = (e) => {
        setSearchQuery(e.target.value);
        debouncedSearchMovie(e.target.value);
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

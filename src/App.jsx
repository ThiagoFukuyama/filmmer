import { useCallback, useEffect, useMemo, useState } from "react";
import { Heading, Center } from "@chakra-ui/react";
import useDebounce from "./hooks/useDebounce";
import SearchBar from "./components/SearchBar";
import MoviesContainer from "./components/MoviesContainer";
import MainTitle from "./components/MainTitle";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
    const API_URL = `https://www.omdbapi.com?apikey=5dfc069`;
    const DEFAULT_SEARCH_QUERY = "Sword";

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        searchMovie();
    }, []);

    const searchMovie = useCallback(async (title) => {
        const search = title || DEFAULT_SEARCH_QUERY;
        try {
            const response = await fetch(`${API_URL}&s=${search}`);
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
        <>
            <MainTitle>Filmmer</MainTitle>
            <SearchBar value={searchQuery} onChange={handleOnChange} />

            {isLoading && <LoadingScreen />}

            <Center maxW={"container.2xl"} mt={10} p={10}>
                {error ? (
                    <Heading>
                        Sorry, something went wrong. Please try again later.
                    </Heading>
                ) : (
                    <MoviesContainer movies={movies} />
                )}
            </Center>
        </>
    );
};

export default App;

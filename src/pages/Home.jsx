import { useEffect } from "react";
import MainTitle from "../components/MainTitle";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import { Container } from "../components/shared";
import { useMovies } from "../hooks/useMovies";

const Home = () => {
    const {
        movies,
        isLoading,
        error,
        movieSearch: { search, debouncedSearch, abortRequest },
    } = useMovies();

    useEffect(() => {
        search();

        return () => {
            debouncedSearch.cancel();
            if (import.meta.env.PROD) abortRequest();
            /* React Strict Mode parece afetar o uso do AbortController na cleanup do useEffect, em um projeto real melhor utilizar algo como React Query para lidar com isso */
        };
    }, []);

    return (
        <main>
            <Container>
                <MainTitle>Filmmer</MainTitle>
                <SearchBar onChange={debouncedSearch} />
                <SearchResults
                    movies={movies}
                    isLoading={isLoading}
                    error={error}
                />
            </Container>
        </main>
    );
};

export default Home;

import { useEffect } from "react";
import { useMovies } from "../hooks/useMovies";
import Container from "../components/Container";
import MainTitle from "../components/MainTitle";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

const Home = () => {
    const { movies, isLoading, error, searchMovie, debouncedSearchMovie } =
        useMovies();

    useEffect(() => {
        searchMovie();
        return () => debouncedSearchMovie.cancel();
        /* React Strict Mode parece afetar o uso do AbortController na cleanup do useEffect, em um projeto real melhor utilizar algo como React Query para lidar com isso */
    }, []);

    return (
        <main>
            <Container>
                <MainTitle>Filmmer</MainTitle>
                <SearchBar onChange={debouncedSearchMovie} />
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

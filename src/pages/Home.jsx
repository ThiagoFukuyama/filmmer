import { useEffect } from "react";
import { useMovies } from "../hooks/useMovies";
import Heading from "../components/Heading";
import Container from "../components/Container";
import MainTitle from "../components/MainTitle";
import SearchBar from "../components/SearchBar";
import LoadingScreen from "../components/LoadingScreen";
import MoviesContainer from "../components/MoviesContainer";

const Home = () => {
    const { movies, isLoading, error, searchMovie, debouncedSearchMovie } =
        useMovies();

    useEffect(() => {
        searchMovie();
        return () => debouncedSearchMovie.cancel();
        /* React Strict Mode parece afetar o uso do AbortController na cleanup do useEffect, em um projeto real melhor utilizar algo como React Query para lidar com isso */
    }, []);

    return (
        <Container>
            <MainTitle>Filmmer</MainTitle>
            <SearchBar searchMovie={debouncedSearchMovie} />
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

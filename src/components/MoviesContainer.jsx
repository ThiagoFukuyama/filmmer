import { Flex, Heading } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies }) => {
    return movies?.length > 0 ? (
        <Flex flexWrap={"wrap"} justifyContent={"center"} gap={"2rem"}>
            {movies.map((movie) => {
                return <MovieCard key={movie.imdbID} movie={movie} />;
            })}
        </Flex>
    ) : (
        <Heading>No results found</Heading>
    );
};

export default MoviesContainer;

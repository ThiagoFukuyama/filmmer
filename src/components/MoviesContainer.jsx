import { Flex, Container, Heading } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies }) => {
  return (
    <Container maxW={"container.2xl"} mt={10} p={10}>
      <Flex flexWrap={"wrap"} justifyContent={"center"} gap={"2rem"}>
        {movies?.length > 0 ? (
          movies.map((movie) => {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })
        ) : (
          <Heading>No results found</Heading>
        )}
      </Flex>
    </Container>
  );
};

export default MoviesContainer;

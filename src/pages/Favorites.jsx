import { Heading, Container } from "@chakra-ui/react";
import MoviesContainer from "../components/MoviesContainer";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <Container maxW={"container.2xl"}>
            <Heading>My Favorites</Heading>
            <MoviesContainer movies={favorites} />
        </Container>
    );
};

export default Favorites;

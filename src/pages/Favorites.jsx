import { IoHeart } from "react-icons/io5";
import Container from "../components/Container";
import Heading from "../components/Heading";
import MoviesContainer from "../components/MoviesContainer";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <Container>
            <Heading className="text-center mt-10 mb-14">
                <IoHeart
                    color="#DD4849"
                    style={{ display: "inline-block", marginBottom: "0.5rem" }}
                />{" "}
                My Favorites
            </Heading>
            <MoviesContainer
                movies={favorites}
                emptyMessage={"No favorites yet"}
            />
        </Container>
    );
};

export default Favorites;

import { useFavorites } from "../context/FavoritesContext";
import { IoHeart } from "react-icons/io5";
import Heading from "../components/Heading";
import Container from "../components/Container";
import MoviesContainer from "../components/MoviesContainer";

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <main>
            <Container>
                <Heading className="text-center mt-10 mb-14">
                    <IoHeart
                        className="inline-block mr-2.5 mb-2"
                        color="#DD4849"
                    />
                    My Favorites
                </Heading>

                <MoviesContainer
                    movies={favorites}
                    emptyMessage={"No favorites yet"}
                />
            </Container>
        </main>
    );
};

export default Favorites;

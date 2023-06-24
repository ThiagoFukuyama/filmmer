import { IoHeart } from "react-icons/io5";
import MoviesContainer from "components/MoviesContainer";
import { Container, Heading } from "components/shared";
import { useFavorites } from "context/FavoritesContext";

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

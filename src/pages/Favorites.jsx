import { AiFillStar } from "react-icons/ai";
import Container from "../components/Container";
import MoviesContainer from "../components/MoviesContainer";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <Container>
            <h1 className="text-4xl text-center font-bold mt-10 mb-14">
                <AiFillStar
                    color="#fafa48"
                    style={{ display: "inline-block", marginBottom: "0.5rem" }}
                />{" "}
                My Favorites
            </h1>
            <MoviesContainer
                movies={favorites}
                emptyMessage={"No favorites yet"}
            />
        </Container>
    );
};

export default Favorites;

import { IoHeart } from "react-icons/io5";

const RemoveFavoriteButton = ({ removeFavorite, imdbID }) => {
    return (
        <button
            title="Remove from favorites"
            type="button"
            onClick={() => removeFavorite(imdbID)}
        >
            <p className="sr-only">Remove from favorites</p>
            <IoHeart size={32} color="#DD4849" />
        </button>
    );
};

export default RemoveFavoriteButton;

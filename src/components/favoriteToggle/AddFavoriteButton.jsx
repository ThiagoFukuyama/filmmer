import { IoHeartOutline } from "react-icons/io5";

const AddFavoriteButton = ({ addFavorite, movie }) => {
    return (
        <button
            title="Add to favorites"
            type="button"
            onClick={() => addFavorite(movie)}
        >
            <p className="sr-only">Add to favorites</p>
            <IoHeartOutline size={32} color="#DD4849" />
        </button>
    );
};

export default AddFavoriteButton;

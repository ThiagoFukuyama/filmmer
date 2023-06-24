import { PLACEHOLDER_IMAGE_URL, TYPE_COLORS } from "data/constants";
import FavoriteButton from "components/FavoriteButton";

const MovieCard = ({ movie }) => {
    const { Title, Year, Poster, Type } = movie;
    const typeColor = TYPE_COLORS[Type] || "bg-movie";

    return (
        <div className="relative w-[300px] bg-dark-gray-100 rounded-md overflow-hidden transition duration-300 hover:scale-[1.025]">
            <img
                className="w-full h-[300px] object-cover"
                src={Poster !== "N/A" ? Poster : PLACEHOLDER_IMAGE_URL}
                onError={(e) => (e.target.src = PLACEHOLDER_IMAGE_URL)}
            />

            <div className="p-5">
                <h2 className="text-xl font-bold mb-3">{Title}</h2>
                <p className="text-gray-400 mb-4">{Year}</p>
                <span
                    className={`${typeColor} text-sm font-bold rounded-md p-2 pt-1`}
                >
                    {Type}
                </span>
            </div>

            <FavoriteButton movie={movie} />
        </div>
    );
};

export default MovieCard;

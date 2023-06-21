import FavoriteButton from "./FavoriteButton";

const MovieCard = ({ movie }) => {
    const { Title, Year, Poster, Type } = movie;
    const PLACEHOLDER_IMAGE_URL = "https://via.placeholder.com/400";
    let typeColor;
    switch (Type) {
        case "series":
            typeColor = "bg-[#A6378F]";
            break;
        case "game":
            typeColor = "bg-[#CF445B]";
            break;
        default:
            typeColor = "bg-[#E74C3C]";
            break;
    }

    return (
        <div className="relative w-[300px] min-h-[500px] bg-dark-gray-100 rounded-md overflow-hidden transition duration-300 hover:scale-[1.025]">
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

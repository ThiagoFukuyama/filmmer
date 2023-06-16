import FavoriteButton from "./FavoriteButton";

const MovieCard = ({ movie }) => {
    const { imdbID, Title, Year, Poster, Type } = movie;

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
                src={
                    Poster !== "N/A"
                        ? Poster
                        : "https://via.placeholder.com/400"
                }
            />

            <div className="p-5">
                <h2 className="text-xl font-bold">{Title}</h2>
                <p className="text-gray-400 mt-3">{Year}</p>
                <p
                    className={`${typeColor} w-fit text-sm font-bold rounded-md mt-4 p-2 pt-1`}
                >
                    {Type}
                </p>
            </div>
            <FavoriteButton movie={movie} />
        </div>
    );
};

export default MovieCard;

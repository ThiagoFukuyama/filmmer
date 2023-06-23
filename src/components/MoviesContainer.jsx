import Heading from "./Heading";
import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies, emptyMessage }) => {
    if (movies?.length > 0)
        return (
            <div className="flex flex-wrap justify-center gap-8 mb-10">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        );

    return <Heading className="text-center">{emptyMessage}</Heading>;
};

export default MoviesContainer;

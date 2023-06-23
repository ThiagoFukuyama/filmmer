import Heading from "./Heading";
import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies, emptyMessage }) => {
    return movies?.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-8 mb-10">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    ) : (
        <Heading className="text-center">{emptyMessage}</Heading>
    );
};

export default MoviesContainer;

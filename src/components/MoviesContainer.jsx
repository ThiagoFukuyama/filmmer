import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies }) => {
    return movies?.length > 0 ? (
        <div>
            {movies.map((movie) => {
                return <MovieCard key={movie.imdbID} movie={movie} />;
            })}
        </div>
    ) : (
        <h1>No results found</h1>
    );
};

export default MoviesContainer;

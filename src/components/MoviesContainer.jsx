import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies, emptyMessage }) => {
    return movies?.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-8 mb-10">
            {movies.map((movie) => {
                return <MovieCard key={movie.imdbID} movie={movie} />;
            })}
        </div>
    ) : (
        <h1 className="text-4xl font-bold text-center">{emptyMessage}</h1>
    );
};

export default MoviesContainer;

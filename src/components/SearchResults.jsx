import LoadingScreen from "./LoadingScreen";
import Heading from "./Heading";
import MoviesContainer from "./MoviesContainer";

const SearchResults = ({ movies, isLoading, error }) => {
    return (
        <div className="relative">
            {isLoading && <LoadingScreen />}

            {error ? (
                <Heading className="text-center">
                    Sorry, something went wrong. Please try again later.
                </Heading>
            ) : (
                <MoviesContainer
                    movies={movies}
                    emptyMessage={"No results found"}
                />
            )}
        </div>
    );
};

export default SearchResults;

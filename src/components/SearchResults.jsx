import LoadingScreen from "components/LoadingScreen";
import MoviesContainer from "components/MoviesContainer";
import { Heading } from "components/shared";

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

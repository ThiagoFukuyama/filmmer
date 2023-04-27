import { useCallback, useEffect, useMemo, useState } from "react";
import useDebounce from "./hooks/useDebounce";
import SearchBar from "./components/SearchBar";
import MoviesContainer from "./components/MoviesContainer";
import MainTitle from "./components/MainTitle";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;
  const DEFAULT_SEARCH_QUERY = "Sword";

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchMovie();
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  const searchMovie = useCallback(async (title) => {
    const search = title || DEFAULT_SEARCH_QUERY;
    const response = await fetch(`${API_URL}&s=${search}`);
    const data = await response.json();
    setMovies(data.Search);
  }, []);

  const debouncedSearchMovie = useMemo(() => {
    return useDebounce(searchMovie, 1000);
  }, [searchMovie]);

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
    debouncedSearchMovie(e.target.value);
  };

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <MainTitle text={"Filmmer"} />
          <SearchBar value={searchQuery} onChange={handleOnChange} />
          <MoviesContainer movies={movies} />
        </>
      )}
    </>
  );
};

export default App;

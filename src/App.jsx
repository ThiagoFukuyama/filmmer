import { useEffect, useState } from "react";
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
    }, 100);
  }, []);

  async function searchMovie(title) {
    const search = title || DEFAULT_SEARCH_QUERY;
    const response = await fetch(`${API_URL}&s=${search}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  function handleOnChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchMovie(searchQuery);
  }

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <MainTitle text={"Filmmer"} />
          <SearchBar
            value={searchQuery}
            onChange={handleOnChange}
            onSubmit={handleSubmit}
          />
          <MoviesContainer movies={movies} />
        </>
      )}
    </>
  );
};

export default App;

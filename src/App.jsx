import { useEffect, useState } from "react";
import { Container, Heading, Center } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import MoviesContainer from "./components/MoviesContainer";
import MainTitle from "./components/MainTitle";

const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    searchMovie("Sword");
  }, []);

  async function searchMovie(title) {
    const response = await fetch(`${API_URL}&s=${title}`);
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
      <MainTitle text={"Filmmer"} />

      <SearchBar
        value={searchQuery}
        onChange={handleOnChange}
        onSubmit={handleSubmit}
      />

      <MoviesContainer movies={movies} />
    </>
  );
};

export default App;

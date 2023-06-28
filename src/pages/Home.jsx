import { useState } from "react";
import MainTitle from "../components/MainTitle";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import { Container } from "../components/shared";
import { useDebounce, useFetch } from "../hooks";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedSearchQuery = useDebounce(searchQuery);
    const { data, isLoading, error } = useFetch(
        `https://www.omdbapi.com?apikey=5dfc069&s=${
            debouncedSearchQuery.trim() || "Sword"
        }`
    );

    return (
        <main>
            <Container>
                <MainTitle>Filmmer</MainTitle>

                <SearchBar
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onButtonClick={() => setSearchQuery("")}
                />

                <SearchResults
                    movies={data?.Search}
                    isLoading={isLoading}
                    error={error}
                />
            </Container>
        </main>
    );
};

export default Home;

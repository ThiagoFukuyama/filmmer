import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ value, onChange }) => {
    return (
        <div>
            <div>
                <input
                    type="search"
                    placeholder="Search for movies, series and games..."
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default SearchBar;

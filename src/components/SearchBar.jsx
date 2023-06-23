import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchBar = ({ onChange: search }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleOnChange = ({ target: { value } }) => {
        setSearchQuery(value);
        search(value.trim());
    };

    const handleClick = () => {
        setSearchQuery("");
        search("");
    };

    return (
        <div className="relative max-w-[660px] bg-dark-gray-100 focus-within:bg-dark-gray-200 border border-transparent focus-within:border-[#DD484990] text-lg shadow-2xl rounded-full mx-auto mb-20 px-3 transition duration-200">
            <AiOutlineSearch
                className="absolute left-4 bottom-3 pointer-events-none"
                size={28}
                color="#DD4849"
            />

            <input
                className="w-full bg-transparent outline-none pl-10 pr-8 py-3 placeholder:opacity-40"
                type="text"
                placeholder="Search for movies, series and games..."
                value={searchQuery}
                onChange={handleOnChange}
            />

            {searchQuery !== "" && (
                <button
                    onClick={handleClick}
                    className="absolute right-5 bottom-1/4 p-1 z-10"
                >
                    <span className="sr-only">Clear search box</span>
                    <AiOutlineClose size={18} color="#DD4849" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;

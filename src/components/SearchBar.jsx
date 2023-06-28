import { useRef } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ value, onChange, onButtonClick }) => {
    const inputRef = useRef();

    const handleButtonClick = () => {
        onButtonClick();
        inputRef.current.focus();
    };

    return (
        <div className="flex justify-center items-center relative max-w-[660px] bg-dark-gray-100 focus-within:bg-dark-gray-200 border border-transparent focus-within:border-[#DD484990] text-lg shadow-2xl rounded-full mx-auto mb-20 px-3 transition duration-200">
            <AiOutlineSearch
                className="absolute left-4 bottom-3 pointer-events-none"
                size={28}
                color="#DD4849"
            />

            <label className="sr-only" htmlFor="search">
                Search for movies, series and games
            </label>
            <input
                className="w-full bg-transparent outline-none pl-10 pr-2 py-3 placeholder:opacity-40"
                type="text"
                id="search"
                placeholder="Search for movies, series and games..."
                ref={inputRef}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />

            {value !== "" && (
                <button onClick={handleButtonClick} className="p-1.5">
                    <span className="sr-only">Clear search box</span>
                    <AiOutlineClose size={18} color="#DD4849" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;

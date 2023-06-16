import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="relative max-w-[660px] bg-dark-gray-100 focus-within:bg-dark-gray-200 border border-transparent focus-within:border-[#DD484990] text-lg shadow-2xl rounded-full mx-auto mb-20 px-3 transition duration-200">
            <AiOutlineSearch
                className="absolute left-4 bottom-3"
                size={28}
                color="#DD4849"
            />
            <input
                className="w-full bg-transparent outline-none pl-10 pr-5 py-3 placeholder:opacity-40"
                type="search"
                placeholder="Search for movies, series and games..."
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default SearchBar;

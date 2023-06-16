import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { IoHeart } from "react-icons/io5";

const NavBar = () => {
    return (
        <nav className="max-w-[1330px] mx-auto p-4">
            <ul className="uppercase text-gray-300 flex justify-between sm:justify-center gap-9">
                <li className="transition duration-200 hover:translate-y-0.5 hover:text-gray-400">
                    <Link to="/" className="flex gap-2 items-center">
                        <AiOutlineSearch
                            color="#DD4849"
                            size={20}
                            className="inline"
                        />
                        Search
                    </Link>
                </li>
                <li className="transition duration-200 hover:translate-y-0.5 hover:text-gray-400">
                    <Link to="/favorites" className="flex gap-2 items-center">
                        <IoHeart color="#DD4849" size={20} className="inline" />
                        Favorites
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

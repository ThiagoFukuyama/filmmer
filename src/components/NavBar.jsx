import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { IoHeart } from "react-icons/io5";

const NavBar = () => {
    return (
        <nav className="max-w-[1300px] mx-auto px-4 py-3">
            <ul className="uppercase flex justify-between gap-10">
                <li className="flex items-center gap-2">
                    <AiOutlineSearch
                        color="#DD4849"
                        size={20}
                        style={{ display: "inline-block" }}
                    />
                    <Link to="/">Search</Link>
                </li>
                <li className="flex items-center gap-2">
                    <IoHeart
                        color="#DD4849"
                        size={20}
                        style={{ display: "inline-block" }}
                    />
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

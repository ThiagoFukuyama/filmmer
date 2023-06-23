import { AiOutlineSearch } from "react-icons/ai";
import { IoHeart } from "react-icons/io5";
import NavLink from "./NavLink";

const NavBar = () => {
    return (
        <nav className="max-w-[1330px] mx-auto p-4">
            <ul className="uppercase text-gray-300 flex justify-between sm:justify-center gap-9">
                <li>
                    <NavLink to="/">
                        <AiOutlineSearch
                            color="#DD4849"
                            size={20}
                            className="inline"
                        />
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">
                        <IoHeart color="#DD4849" size={20} className="inline" />
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

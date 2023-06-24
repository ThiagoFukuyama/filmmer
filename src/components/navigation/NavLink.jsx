import { NavLink as Link } from "react-router-dom";

const NavLink = ({ to, children }) => {
    return (
        <Link
            to={to}
            className="flex gap-2 items-center transition duration-200 hover:text-gray-400 hover:translate-y-0.5"
        >
            {children}
        </Link>
    );
};

export default NavLink;

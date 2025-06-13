import { Link } from "react-router-dom"
import X from "./X";

export default function NavMenu({ attivaMenu, toggleMenu }) {
    return (
        <nav className="nav_menu">
            <ul className="flex justify-between items-center">
                <Link to="/" onClick={attivaMenu ? toggleMenu : ''} className={`logo ${attivaMenu ? 'text-black' : 'text-white'}`}>
                    MS
                </Link>
                <X toggleMenu={toggleMenu} attivaMenu={attivaMenu} />
            </ul>
        </nav >
    );
}

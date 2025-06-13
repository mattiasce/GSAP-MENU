import arrow_right from '../assets/ARROW_RIGHT.svg'
import { Link } from "react-router-dom"

export default function VoceMainMenu({ voce, toggleMenu }) {
    return (
        <>
            <div className='box_voce_main_menu' onClick={toggleMenu}>
                <Link to={`/${voce}`} className='voce_main_menu reveal'>
                    <img src={arrow_right} alt="arrow_right" className="arrow_right" />
                    {voce}
                </Link>
            </div>
        </>
    )
}
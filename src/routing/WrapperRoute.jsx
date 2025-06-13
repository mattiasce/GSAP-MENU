import { useState } from "react";
import { Outlet } from "react-router";
import NavMenu from "../components/NavMenu";
import MainMenu from "../components/MainMenu";

export default function WrapperRoute() {
    const [attivaMenu, setAttivaMenu] = useState(false);
   // Funzione che cambia lo stato di attivaMenù, se false non è visibile, se true è visibile
    const toggleMenu = () => setAttivaMenu(!attivaMenu);
    console.log('Menù attivo?' + attivaMenu)

    return (
        <>
            {/* Render dei componenti e passaggio props */}
            <NavMenu attivaMenu={attivaMenu} toggleMenu={toggleMenu} />
            <MainMenu attivaMenu={attivaMenu} toggleMenu={toggleMenu} />
            <Outlet />
        </>
    );
}

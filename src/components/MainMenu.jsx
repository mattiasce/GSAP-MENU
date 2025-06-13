import { gsap } from 'gsap'
import { useEffect, useRef } from "react"
import BtnSocial from "./BtnSocial"
import VoceMainMenu from './VoceMainMenu'


export default function MainMenu({ attivaMenu, toggleMenu }) {

    const voci_menu = ['LAB', 'Works', 'Services', 'Careers']

    const menuTimeline = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ paused: true })

        tl.fromTo('.main_menu',
            { y: '-100%' },
            { y: 0, duration: 0.8, ease: 'power2.inOut' },
        )

        tl.fromTo('.reveal',
            { y: '-100%' },
            { y: 0, stagger: 0.1 },
        )

        menuTimeline.current = tl
    }, [])

    useEffect(() => {
        if (attivaMenu) {
            menuTimeline.current.play()
        } else {
            menuTimeline.current.reverse()
        }
    }, [attivaMenu])

    return (
        <div className="main_menu">
            <ul>
                {voci_menu.map((voce, index) => (
                    <VoceMainMenu key={index} voce={voce} toggleMenu={toggleMenu} />
                ))}
            </ul>

            <div className="socials_container">
                <BtnSocial>Instagram</BtnSocial>
                <BtnSocial>Linkedin</BtnSocial>
                <BtnSocial>Behance</BtnSocial>
                <BtnSocial>Github</BtnSocial>
            </div>
        </div>
    )
}

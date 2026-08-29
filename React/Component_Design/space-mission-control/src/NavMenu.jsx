import { useState } from "react";
import {Squash as Hamburger} from "hamburger-react";
import './NavMenu.css'


function NavMenu() {

    const navMenu = [
        {label: "Mission Control", href: "/"},
        {label: "Inventory", href: "/inventory"}
    ];

    const [isOpen, setOpen] = useState(false);

    return (
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <Hamburger toggled={isOpen} toggle={setOpen}/>
            {isOpen && (
                <ul className="nav-list">
                    {navMenu.map(item => (
                        <li key={item.href}>
                            <a href={item.href} className="nav-links">{item.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default NavMenu;
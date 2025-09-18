import logo from "../assets/LogoViba3.png"
import MobileMenu from "./MobileMenu";
import { useState } from "react";

function Navbar(){

    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <header className="px-4 pt-4 flex justify-between items-center">
            <img
                src={logo}
                alt="ViBa Financial Services"
                className="h-[70px]"
            />
            <button onClick={() => setMenuOpen(!menuOpen)}
            className={`navbar-btn ${menuOpen ? 'menu-open' : ''} relative w-8 h-6 flex flex-col justify-between items-center`}>
                <span className="block w-7 h-[3px] bg-dark rounded"></span>
                <span className="block w-7 h-[3px] bg-dark rounded"></span>
                <span className="block w-7 h-[3px] bg-dark rounded"></span>
            </button>
            <MobileMenu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
        </header>

    );
}

export default Navbar;
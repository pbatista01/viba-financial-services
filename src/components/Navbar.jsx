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
                className="h-[60px] sm:h-[65px] md:h-[70px] lg:h-[75px] xl:h-[80px] 2xl:h-[85px]"
            />
            <button onClick={() => setMenuOpen(!menuOpen)}
            className={`navbar-btn fixed ${menuOpen ? 'menu-open' : ''} relative w-8 h-6 flex flex-col justify-between items-center pr-4 lg:hidden z-20`}>
                <span className={`block h-[2.5px] rounded ${menuOpen ? 'bg-light w-7' : 'bg-dark w-6'}`}></span>
                <span className={`block h-[2.5px] rounded ${menuOpen ? 'bg-light w-7' : 'bg-dark w-6'}`}></span>
                <span className={`block h-[2.5px] rounded ${menuOpen ? 'bg-light w-7' : 'bg-dark w-6'}`}></span>
            </button>
            <MobileMenu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
        </header>

    );
}

export default Navbar;
import logo from "../assets/LogoViba3.png";
import MobileMenu from "./MobileMenu";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    // Cierra el menú si el viewport pasa a lg (≥768px)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [menuOpen]);
    return (
        <header className="w-full px-6 py-4 xl:px-9 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
                <img
                    src={logo}
                    alt="ViBa Financial Services"
                    className="h-[60px] sm:h-[65px] md:h-[70px] lg:h-[60px] xl:h-[80px] 2xl:h-[85px]"
                />
            </div>

            {/* Menú centrado */}
            <nav className="hidden lg:flex flex-1 justify-center gap-2 xl:gap-4 2xl:gap-6 items-center">
                <a className="text-dark text-[0.85rem] xl:text-[1.1rem] 2xl:text-[1.3rem] font-semibold tracking-wide hover:underline hover:text-primary" href="#servicios">Servicios</a>
                <a className="text-dark text-[0.85rem] xl:text-[1.1rem] 2xl:text-[1.3rem] font-semibold tracking-wide hover:underline hover:text-primary" href="#nosotros">Nosotros</a>
                <a className="text-dark text-[0.85rem] xl:text-[1.1rem] 2xl:text-[1.3rem] font-semibold tracking-wide hover:underline hover:text-primary" href="#aliados">Aliados</a>
                <a className="text-dark text-[0.85rem] xl:text-[1.1rem] 2xl:text-[1.3rem] font-semibold tracking-wide hover:underline hover:text-primary" href="#testimonios">Testimonios</a>
                <a className="text-dark text-[0.85rem] xl:text-[1.1rem] 2xl:text-[1.3rem] font-semibold tracking-wide hover:underline hover:text-primary" href="#herramientas">Herramientas</a>
                <a className="text-dark text-[0.85rem] xl:text-[1.1rem] 2xl:text-[1.3rem] font-semibold tracking-wide hover:underline hover:text-primary" href="#equipo">Únete al equipo</a>
            </nav>

            {/* Botón a la derecha */}
            <div className="hidden lg:block flex-shrink-0">
                <button className="bg-primary text-light px-4 py-2 lg:px-3 rounded-xl shadow-custom lg:text-[0.9rem] xl:text-[1.1rem] hover:bg-primaryHover font-semibold">
                    Cotiza ahora<FontAwesomeIcon icon={faArrowPointer} />
                </button>
            </div>

            {/* Botón hamburguesa solo en mobile */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`navbar-btn fixed ${menuOpen ? "menu-open" : ""} relative w-8 h-6 flex flex-col justify-between items-center pr-4 lg:hidden z-20`}
            >
                <span className={`block h-[2.5px] rounded ${menuOpen ? "bg-light w-7" : "bg-dark w-6"}`}></span>
                <span className={`block h-[2.5px] rounded ${menuOpen ? "bg-light w-7" : "bg-dark w-6"}`}></span>
                <span className={`block h-[2.5px] rounded ${menuOpen ? "bg-light w-7" : "bg-dark w-6"}`}></span>
            </button>

            {/* Menú móvil */}
            <MobileMenu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
        </header >
    );
}

export default Navbar;

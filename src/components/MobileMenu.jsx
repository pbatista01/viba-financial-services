function MobileMenu({ isOpen, closeMenu }) {
    return(
        <div className={`absolute top-full right-0 transition ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <button className="relative w-7 h-7">
                <span className="block bg-light w-7 h-[3px] rounded  absolute top-4 left-[230px] rotate-45"></span>
                <span className="block bg-light w-7 h-[3px] rounded  absolute top-4 left-[230px] -rotate-45"></span>
            </button>
            <ul className="flex flex-col gap-4 mt-10 justify-between items-center text-[1.1rem]">
                <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu} >Servicios</a></li>
                <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu} >Nosotros</a></li>
                <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu} >Aliados</a></li>
                <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu} >Testimonios</a></li>
                <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu} >Herramientas</a></li>
                <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu} >Unete al equipo</a></li>
                <li><button className="w-full bg-light px-3 py-2 text-[1.1rem] font-semibold text-primary rounded-xl shadow-custom mt-8 tracking-wide">Cotiza ahora</button></li>
            </ul>
        </div>
    );
}

export default MobileMenu;
function MobileMenu({ isOpen, closeMenu }) {
    return(
        <div className={`absolute top-full transition ${isOpen ? "opacity-100 bg-primary w-full m-0 fixed top-0 h-[100%] right-0 z-10" : "opacity-0 pointer-events-none"}`}>
            <button className="relative w-7 h-7">
                <span className="block bg-light w-8 h-[2.5px] rounded  absolute top-12 left-[265px] rotate-45"></span>
                <span className="block bg-light w-8 h-[2.5px] rounded  absolute top-12 left-[265px] -rotate-45"></span>
            </button>
            <ul className="flex flex-col gap-4 mt-16 justify-between items-center">
                <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu} >Servicios</a></li>
                <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu} >Nosotros</a></li>
                <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu} >Aliados</a></li>
                <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu} >Testimonios</a></li>
                <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu} >Herramientas</a></li>
                <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu} >Unete al equipo</a></li>
                <li><button className="w-full bg-light px-3 py-2 font-semibold text-primary rounded-xl shadow-custom mt-8 tracking-wide">Cotiza ahora</button></li>
            </ul>
        </div>
    );
}

export default MobileMenu;
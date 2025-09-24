function MobileMenu({ isOpen, closeMenu }) {
  return (
    <div className={`fixed transition-all duration-500 ease-in-out w-full h-full right-0 z-10 bg-primary
      ${isOpen ? "top-0 opacity-100 pointer-events-auto" : "-top-full opacity-0 pointer-events-none"}`}>
      <ul className="flex flex-col gap-4 mt-16 justify-center items-center">
        <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu}>Servicios</a></li>
        <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu}>Nosotros</a></li>
        <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu}>Aliados</a></li>
        <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu}>Testimonios</a></li>
        <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu}>Herramientas</a></li>
        <li><a className="text-light font-semibold tracking-wide" onClick={closeMenu}>Únete al equipo</a></li>
        <li><button className="w-full bg-light px-3 py-2 font-semibold text-primary rounded-xl shadow-custom mt-8 tracking-wide">Cotiza ahora</button></li>
      </ul>
    </div>
  );
}

export default MobileMenu;

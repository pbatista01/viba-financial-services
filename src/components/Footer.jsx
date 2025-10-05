import logo from "../assets/LogoViba3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer className="bg-primary px-2 py-3 lg:px-10 lg:py-10">
            <div className="flex flex-row gap-6 lg:justify-between">
                <div className="flex-shrink-0">
                    <img
                        src={logo}
                        alt="ViBa Financial Services"
                        className="h-[48px]"
                    />
                </div>
                <div className="hidden max-w-[1200px] mx-auto lg:grid lg:grid-cols-2 gap-20 text-dark">
                    <div>
                        <h4 className="font-body font-bold text-base xl:text-lg mb-2">Contáctanos</h4>
                        <p className="text-sm xl:text-lg mt-1"><FontAwesomeIcon icon={faLocationDot} /> Alpharetta, GA</p>
                        <p className="text-sm xl:text-lg mt-1"><FontAwesomeIcon icon={faPhone} /> +1 470 640 9684</p>
                        <p className="text-sm xl:text-lg mt-1"><FontAwesomeIcon icon={faEnvelope} /> vbatista.ffl@gmail.com</p>
                    </div>

                    <div>
                        <h4 className="font-body font-bold text-base xl:text-lg mb-2">Enlaces útiles</h4>
                        <ul className="grid grid-cols-2 gap-1 text-sm xl:text-lg">
                            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
                            <li><a href="#nosotros" className="hover:underline">Sobre nosotros</a></li>
                            <li><a href="#aliados" className="hover:underline">Aliados</a></li>
                            <li><a href="#testimonios" className="hover:underline">Testimonios</a></li>
                            <li><a href="#herramientas" className="hover:underline">Herramientas</a></li>
                            <li><a href="#unete" className="hover:underline">Unete al equipo</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-2 lg:mt-4 text-xs lg:text-lg text-dark">
                © {new Date().getFullYear()} ViBa Financial Services. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;
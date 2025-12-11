import logo from "../assets/LogoViba3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer({data}) {
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
                        <p className="text-sm xl:text-lg mt-1"><FontAwesomeIcon icon={faLocationDot} /> {data.contact.location}</p>
                        <p className="text-sm xl:text-lg mt-1"><FontAwesomeIcon icon={faPhone} /> {data.contact.phone}</p>
                        <p className="text-sm xl:text-lg mt-1"><FontAwesomeIcon icon={faEnvelope} /> {data.contact.email}</p>
                    </div>

                    <div>
                        <h4 className="font-body font-bold text-base xl:text-lg mb-2">Enlaces útiles</h4>
                        <ul className="grid grid-cols-2 gap-1 text-sm xl:text-lg">
                            {data.links.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:underline">{link.label}</a>
                </li>
              ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-2 lg:mt-4 text-xs lg:text-lg text-dark">
                © {new Date().getFullYear()} {data.copyright}
            </div>
        </footer>
    );
}

export default Footer;
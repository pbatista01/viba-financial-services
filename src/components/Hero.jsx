import heroImage from "../assets/heroImage.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

function Hero() {
    return (
        <section className="p-6 sm:p-8 xl:p-20 text-dark font-body flex flex-col xl:flex-row">
            <img
                src={heroImage}
                alt="Familia Feliz"
                className="w-full rounded-lg object-cover mb-6 xl:w-[50%] xl:h-[20%] xl:order-2 "
            />
            <div className="mt-6 xl:p-5">
                <h1 className="w-[90%] text-[1.4rem] font-bold leading-[45px]">Protege tu futuro y
                    el de tu familia con <span className="text-primary italic">
                        ViBa Financial Services</span></h1>
                <p className="w-[100%] mt-6 text-[1.1rem] leading-[35px] tracking-wide">En VIBA Financial Services somos una agencia con un solo propósito:
                    impactar y transformar la vida de los latinos en Estados Unidos.
                </p>
                <p className="w-[100%] mt-6 text-[1.1rem] leading-[35px] tracking-wide"> Nuestra
                    misión es proteger las vidas y las finanzas de nuestra comunidad,
                    ofreciendo soluciones financieras reales, claras y diseñadas para su
                    bienestar.</p>
                <button className="w-[95%] mx-auto h-[68px] bg-primary text-light text-[1.15rem] font-bold px-4 pr-[70px] rounded-xl leading-[25px] mt-10 shadow-custom relative">Agenda tu consulta gratis<FontAwesomeIcon icon={faCalendarAlt} className="text-[2rem] text-light absolute top-[18px] right-7" /></button>
            </div>
        </section>
    );
}

export default Hero;
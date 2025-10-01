import heroImage from "../assets/heroImage.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

function Hero() {
    return (
        <section className="px-6 pt-16  pb-24 text-dark flex flex-col lg:flex-row">
            <img
                src={heroImage}
                alt="Familia Feliz"
                className="w-full rounded-lg object-cover mb-6 lg:w-[50%] lg:order-2 "
            />
            <div className="mt-6 lg:p-10 lg:w-[45%] lg:mt-[-40px]">
                <h1 className="w-[90%] text-[1.4rem] lg:text-[1.2rem] xl:text-[2rem] 3xl:text-[1.8rem] font-semibold font-heading leading-[45px] lg:leading-[35px] xl:leading-[50px] 3xl:leading-[50px]">Protege tu futuro y
                    el de tu familia con <span className="text-primary italic">
                        ViBa Financial Services</span></h1>
                <p className="w-[100%] mt-6 text-[1.1rem] font-body lg:text-[0.9rem] xl:text-[1.1rem]  3xl:text-[1.3rem] lg:leading-[25px] xl:leading-[32px] 3xl:leading-[40px] lg:mt-2 3xl:mt-3 leading-[35px] tracking-wide">En VIBA Financial Services somos una agencia con un solo propósito:
                    impactar y transformar la vida de los latinos en Estados Unidos.
                </p>
                <p className="w-[100%] mt-6 text-[1.1rem] font-body lg:text-[0.9rem] xl:text-[1.1rem] 3xl:text-[1.3rem] leading-[35px] lg:leading-[25px] xl:leading-[32px] 3xl:leading-[40px] lg:mt-0 xl:mt-1 3xl:mt-3 tracking-wide"> Nuestra
                    misión es proteger las vidas y las finanzas de nuestra comunidad,
                    ofreciendo soluciones financieras reales, claras y diseñadas para su
                    bienestar.</p>
                <button className="w-[95%] xl:w-[90%] 2xl:w-[80%] mx-auto h-[68px] lg:h-[50px] xl:h-[55px] 3xl:h-[65px] bg-primary text-light text-[1.15rem] lg:text-[0.9rem] xl:text-[1.1rem] 3xl:text-[1.4rem] font-bold px-4 lg:px-0 pr-[70px] lg:pr-7 xl:pr-10 rounded-xl leading-[25px] lg:leading-[20px] mt-10 lg:mt-5 xl:mt-6 shadow-custom relative hover:bg-primaryHover tracking-wide">Agenda tu consulta gratis<FontAwesomeIcon icon={faCalendarAlt} className="text-[2rem] lg:text-[1.2rem] xl:text-[1.5rem] 3xl:text-[1.8rem] text-light absolute top-[18px] lg:top-[16px] xl:top-[17px] 3xl:top-[20px] right-7 lg:right-3 xl:right-6 3xl:right-10" /></button>
            </div>
        </section>
    );
}

export default Hero;
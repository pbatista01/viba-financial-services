import heroImage from "../assets/heroImage.png"

function Hero() {
    return (
        <section className="p-12 text-dark font-body">
            <img
                src={heroImage}
                alt="Familia Feliz"
                className="w-full rounded-lg object-cover mb-10"
            />
            <div className="mt-6">
                <h1 className="w-[90%] text-[1.9rem] font-bold leading-[50px]">Protege tu futuro y
                    el de tu familia con <span className="text-primary italic ">
                        ViBa Financial Services</span></h1>
                <p className="w-[100%] mt-6 text-[1.3rem] leading-[35px] tracking-wide">En VIBA Financial Services somos una agencia con un solo propósito:
                    impactar y transformar la vida de los latinos en Estados Unidos.
                </p>
                <p className="w-[100%] mt-6 text-[1.3rem] leading-[35px] tracking-wide"> Nuestra
                    misión es proteger las vidas y las finanzas de nuestra comunidad,
                    ofreciendo soluciones financieras reales, claras y diseñadas para su
                    bienestar.</p>
                <button className="w-[100%] mx-auto h-[90px] bg-primary text-light text-[1.4rem] font-bold px-6 pr-[120px] rounded-xl leading-[30px] mt-10">Agenda tu consulta gratis</button>
            </div>
        </section>
    );
}


export default Hero;
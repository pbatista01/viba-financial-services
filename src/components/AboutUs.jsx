import aboutUsImage from "../assets/aboutUsimage1.png"

function AboutUs(){
    return(
        <section className="bg-primary text-light px-6 py-14 lg:px-[72px] xl:px-22">
            <h2 className="text-center text-[1.4rem] lg:text-[1.3rem] xl:text-[1.6rem] 3xl:text-[2rem] font-heading">Sobre ViBa Financial Services</h2>
            <div className="flex flex-col justify-center lg:flex-row lg:justify-start lg:items-center 2xl:items-start">
            <img src={aboutUsImage} className="mt-6 2xl:mt-14 rounded-lg order-5 lg:order-2 lg:w-[50%] lg:h-[70%] xl:w-[45%] xl:h-[30%] xl:mx-0"/>
            <div className=" mt-12 lg:order-5 flex flex-col lg:mt-6 lg:gap-2 xl:gap-8 lg:pl-8 xl:pl-16">
                <p className="text-[1.1rem] lg:text-[0.85rem] xl:text-[1.1rem] 3xl:text-[1.3rem] font-body mt-4 lg:mt-0 xl:mt-4 2xl:mt-6 3xl:mt-20 leading-[35px] lg:leading-[25px] xl:leading-[30px]  2xl:leading-[35px]">En ViBa Financial Services creemos que la educación y la información son la base para construir un futuro financiero sólido. Nuestro compromiso es con la comunidad latina en Estados Unidos: acompañarlos, guiarlos y protegerlos en cada paso de su camino hacia la libertad financiera.</p>
                <p className="text-[1.1rem] lg:text-[0.85rem] xl:text-[1.1rem] 3xl:text-[1.3rem] font-body mt-4 lg:mt-0 2xl:mt-2 leading-[35px] lg:leading-[25px] xl:leading-[30px] 2xl:leading-[35px]">Entendemos que cada familia tiene necesidades únicas. Por eso, más que agentes, somos seres humanos que escuchamos, comprendemos y no descansamos hasta encontrar la mejor solución para usted y lo que más quiere. Aquí, el beneficio del cliente siempre está por encima del nuestro, porque esa es la esencia de nuestra agencia madre Family First Life.</p>
                <p className="text-[1.1rem] lg:text-[0.85rem] xl:text-[1.1rem] 3xl:text-[1.3rem] font-body mt-4 lg:mt-0 2xl:mt-2 leading-[35px] lg:leading-[25px] xl:leading-[30px] 2xl:leading-[35px]">Nuestro propósito es poner en sus manos las herramientas correctas para que pueda planificar su futuro con confianza: proteger a su familia, asegurar su estabilidad y construir el legado que sueña. En ViBa, no solo ofrecemos seguros y planes financieros, ofrecemos tranquilidad, claridad y compromiso genuino con su bienestar.</p>
            </div>
            </div>
        </section>
    );
}

export default AboutUs;
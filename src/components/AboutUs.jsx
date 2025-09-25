import aboutUsImage from "../assets/aboutUsimage.png"

function AboutUs(){
    return(
        <section className="bg-primary text-light px-6 py-14 flex flex-col">
            <h2 className="text-[1.4rem] font-heading">Sobre ViBa Financial Services</h2>
            <img src={aboutUsImage} className="mt-6 rounded-lg order-3"/>
            
            <div>
                <p className="text-[1.1rem] font-body mt-4 leading-[35px]">En ViBa Financial Services creemos que la educación y la información son la base para construir un futuro financiero sólido. Nuestro compromiso es con la comunidad latina en Estados Unidos: acompañarlos, guiarlos y protegerlos en cada paso de su camino hacia la libertad financiera.</p>
                <p className="text-[1.1rem] font-body mt-4 leading-[35px]">Entendemos que cada familia tiene necesidades únicas. Por eso, más que agentes, somos seres humanos que escuchamos, comprendemos y no descansamos hasta encontrar la mejor solución para usted y lo que más quiere. Aquí, el beneficio del cliente siempre está por encima del nuestro, porque esa es la esencia de nuestra agencia madre Family First Life.</p>
                <p className="text-[1.1rem] font-body mt-4 leading-[35px]">Nuestro propósito es poner en sus manos las herramientas correctas para que pueda planificar su futuro con confianza: proteger a su familia, asegurar su estabilidad y construir el legado que sueña. En ViBa, no solo ofrecemos seguros y planes financieros, ofrecemos tranquilidad, claridad y compromiso genuino con su bienestar.</p>
            </div>
        </section>
    );
}

export default AboutUs;
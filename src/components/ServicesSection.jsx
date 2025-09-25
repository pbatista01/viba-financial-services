import ServiceCard from "./ServiceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faCoins, faChartLine, faHouse, faFile } from "@fortawesome/free-solid-svg-icons";

const servicios = [
    {
        icon: faPeopleGroup,
        title: "Protección con crecimiento",
        description: "El Seguro de Vida Universal Indexado (IUL) va más allá de una póliza tradicional. Ofrece la protección que tu familia merece, mientras te permite construir valor en efectivo de forma estratégica. Con un IUL, puedes cuidar el futuro de tus seres queridos y al mismo tiempo hacer crecer tu patrimonio, aprovechando el desempeño de índices bursátiles, todo con respaldo ante caídas del mercado."
    },
    {
        icon: faCoins,
        title: "Jubilación inteligente",
        description: "Las Anualidades Indexadas ofrecen una alternativa inteligente para quienes desean combinar crecimiento y estabilidad en su estrategia de retiro. Este producto permite que tus ahorros se valoricen según el comportamiento de índices como el S&P 500, sin estar directamente expuestos a la volatilidad del mercado. Así, puedes aprovechar el potencial de crecimiento mientras tu capital permanece protegido ante caídas bursátiles."
    },
    {
        icon: faChartLine,
        title: "Libertad Financiera Real",
        description: "El concepto de banco infinito te da el poder de manejar tu dinero con total autonomía. A través de una póliza de seguro de vida entera con valor en efectivo, puedes ahorrar, invertir y acceder a fondos sin recurrir a bancos tradicionales. Esto significa libertad financiera real: sin comisiones ocultas, sin restricciones, y con acceso a tu capital cuando lo necesites."
    },
    {
        icon: faHouse,
        title: "Seguro con beneficios en vida",
        description: "Protege lo que más importa: tu hogar y tu familia. Este seguro de vida está diseñado para cubrir tu hipoteca y brindarte respaldo financiero en vida. En caso de fallecimiento, garantiza que tu deuda será saldada, y si enfrentas una enfermedad crónica, crítica o terminal, te permite acceder a fondos de forma anticipada. Así puedes afrontar gastos médicos, pagos urgentes o cualquier imprevisto, con la tranquilidad de saber que tu casa sigue siendo un lugar seguro."
    },
    {
        icon: faFile,
        title: "Cobertura vitalicia sin sorpresas",
        description: "El seguro de gastos finales te brinda cobertura permanente, con precios fijos que no aumentan con el tiempo. Está diseñado para asegurar que los costos relacionados con el funeral y otros gastos al final de la vida estén completamente cubiertos, ofreciendo tranquilidad tanto para ti como para tus seres queridos."
    },
];

function ServicesSection(){
    return(
        <section className="p-6 pt-16 pb-20 bg-sectionBg">
            <h2 className="font-heading text-[1.4rem] xl:text-[1.6rem] 3xl:text-[2rem] text-center text-dark">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:px-12 lg:py-5 xl:grid-cols-3 xl:px-12 3xl:px-6">
                {servicios.map((servicio,index) =>(
                    <ServiceCard key={index} {...servicio}/>
                ))}
                
            </div>  
        </section>
    );
}

export default ServicesSection;

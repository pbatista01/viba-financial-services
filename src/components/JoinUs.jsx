import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faLightbulb, faChartLine, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
function JoinUs(){
    return(
        <section className="p-6 pt-24 pb-24 bg-sectionBg">
            <h2 className="font-heading text-[1.4rem] xl:text-[1.6rem] 3xl:text-[2rem] text-center text-primary">Se parte de nuestro equipo</h2>
           <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[80%]">
                <h3 className="font-body text-dark text-[1.25rem] mt-10">Construye tu futuro ayudando a otros a proteger el suyo.</h3>
            <p className="text-[1.1rem] mt-4">En ViBa Financial Services buscamos personas comprometidas, con vision y pasion por transformar vidas a traves de la educacion financiera. <span className="font-bold text-primary">¿Te identificas? </span></p>
            </div>
            
            <div className="flex flex-col gap-3 py-4 px-2 w-[200px] border-2 border-primary text-dark rounded-lg mt-10">
                {[
                    {label: "Flexibilidad", icon: faCircleCheck},
                    {label: "Capacitación", icon: faLightbulb},
                    {label: "Crecimiento Profesional", icon: faChartLine},
                    {label: "Cultura Colaborativa", icon: faPeopleGroup},
                ].map((item,index) => (
                    <div key={index} className="flex flex-row gap-1">
                        <FontAwesomeIcon icon={item.icon} className="text-xl text-primary" />
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
            <div className="mt-10">
                <p className="font-body italic text-[0.9rem] w-[80%] tracking-wide leading-[25px]">“Aqui encontre proposito y crecimiento. Cada dia siento que mi trabajo impacta vidas.”</p>
                <p className="font-body text-sm font-bold">Vladimir Batista</p>
                <span>CEO</span>
            </div>
            </div>
        </section>
    );
}

export default JoinUs;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faLightbulb, faChartLine, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
function JoinUs(){
    return(
        <section className="p-6 pt-24 pb-24 xl:px-24 bg-sectionBg">
            <h2 className="font-heading text-[1.4rem] xl:text-[1.6rem] 3xl:text-[2rem] text-center text-primary">Se parte de nuestro equipo</h2>
           <div className="flex flex-col lg:flex-row lg:gap-6 2xl:gap-10 3xl:gap-16 lg:px-10 lg:mt-6 2xl:mt-16 xl:px-0  lg:items-center">
            <div className="lg:w-full xl:w-[90%] 2xl:w-[75%] flex flex-col gap-2 lg:gap-4 2xl:gap-6">
                <h3 className="font-body text-dark text-[1.25rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.5rem] 3xl:text-[1.7rem] mt-10">Construye tu futuro ayudando a otros a proteger el suyo.</h3>
                <p className="font-body text-[1.1rem] lg:text-base xl:text-[1.2rem] 3xl:text-[1.4rem] mt-4 tracking-wide 3xl:leading-[30px]">En ViBa Financial Services buscamos personas comprometidas, con vision y pasion por transformar vidas a traves de la educacion financiera.</p>
                <span className="font-bold font-body text-[1.1rem] lg:text-base xl:text-[1.2rem] 3xl:text-[1.4rem] text-primary">¿Te identificas? </span>
            </div>
            
            <div className="flex flex-col gap-3 py-4 lg:py-2 2xl:py-3 2xl:gap-6 px-2 w-[200px] lg:w-[400px] 2xl:w-[500px] border-2 border-primary text-dark rounded-lg mt-10 mx-auto">
                {[
                    {label: "Flexibilidad", icon: faCircleCheck},
                    {label: "Capacitación", icon: faLightbulb},
                    {label: "Crecimiento Profesional", icon: faChartLine},
                    {label: "Cultura Colaborativa", icon: faPeopleGroup},
                ].map((item,index) => (
                    <div key={index} className="flex flex-row gap-1">
                        <FontAwesomeIcon icon={item.icon} className="text-xl 3xl:text-[1.8rem] text-primary" />
                        <p className="lg:text-[0.9rem] xl:text-[1.1rem] 3xl:text-[1.3rem]">{item.label}</p>
                    </div>
                ))}
            </div>
            <div className="w-[75%] lg:w-[65%] mt-10 mx-auto flex flex-col gap-2">
                <p className="font-body italic text-[0.9rem] xl:text-[1.1rem] 3xl:text-[1.3rem] w-[100%] 2xl:w-[85%] 3xl:w-[75%] tracking-wide leading-[25px] xl:leading-[30px]">“Aqui encontre proposito y crecimiento. Cada dia siento que mi trabajo impacta vidas.”</p>
                <p className="font-body text-sm font-bold xl:text-[1.1rem] 3xl:text-[1.2rem]">Vladimir Batista</p>
                <span className="text-sm xl:text-[1.1rem] 3xl:text-[1.2rem]">CEO</span>
            </div>
            </div>
            <div className="flex justify-center">
            <button className="w-[95%] lg:max-w-[30%] xl:max-w-[25%] 2xl:max-w-[22%] mx-auto h-[50px] lg:h-[55px] bg-primary text-[1.15rem] lg:text-[1.2rem] xl:text-[1.3rem] 3xl:text-[1.4rem] text-light font-bold px-4 lg:px-0 rounded-xl mt-10 lg:mt-16 xl:mt-24 shadow-custom hover:bg-primaryHover tracking-wide">Postulate ahora</button>
            </div>
        </section>
    );
}

export default JoinUs;
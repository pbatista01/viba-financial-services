import ServiceCard from "./ServiceCard";
import { faPeopleGroup, faCoins, faChartLine, faHouse, faFile } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faPeopleGroup,
  faCoins,
  faChartLine,
  faHouse,
  faFile,
};

function ServicesSection({data}){
    return(
        <section className="p-6 pt-24 pb-24 bg-sectionBg" id="servicios">
            <h2 className="font-heading text-[1.4rem] xl:text-[1.6rem] 3xl:text-[2rem] text-center text-dark">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 gap-8 pt-12 lg:grid-cols-2 lg:px-12 lg:py-5 xl:grid-cols-3 xl:px-12 3xl:px-6">
                {data.items.map((servicio, index) => (
          <ServiceCard
            key={index}
            icon={iconMap[servicio.icon]}
            title={servicio.title}
            description={servicio.description}
          />
        ))}
                
            </div>  
        </section>
    );
}

export default ServicesSection;

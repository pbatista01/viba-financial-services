import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceCard({icon, title, description}){
    return(
        <div className="pt-8 mx-auto">
            <FontAwesomeIcon icon={icon} alt={title} className="text-primary text-4xl mb-2"/>
            <h3 className="2xl:max-w-[320px] font-body text-primary text-[1.35rem] lg:text-[1.18rem] xl:text-[1.2rem] 3xl:text-[1.7rem] font-bold tracking-wide xl:h-12 3xl:h-20">{title}</h3>
            <p className="w-[95%] text-[1.1rem] lg:text-[0.9rem] xl:text-[1.1rem] xl:max-w-[330px] 3xl:text-[1.3rem] 3xl:max-w-[380px] font-body mt-4 lg:mt-2 leading-[35px] text-dark">{description}</p>
        </div>
    );
}

export default ServiceCard;
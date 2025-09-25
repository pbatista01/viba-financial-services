import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceCard({icon, title, description}){
    return(
        <div className="pt-8 mx-auto">
            <FontAwesomeIcon icon={icon} alt={title} className="text-primary text-4xl mb-2"/>
            <h3 className="font-body text-primary text-[1.35rem] font-semibold tracking-wide">{title}</h3>
            <p className="w-[95%] text-[1.1rem] font-body mt-4 leading-[35px] text-dark">{description}</p>
        </div>
    );
}

export default ServiceCard;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faArrowPointer} from "@fortawesome/free-solid-svg-icons";


function ChooseUs(){
    return(
        <section className="p-6 py-24 lg:px-[72px] xl:px-24" id="escogenos">
            <h2 className="font-heading text-[1.4rem] xl:text-[1.6rem] 3xl:text-[2rem] text-center text-dark"> ¿Por que elegirnos?</h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-10 py-10 text-base max-w-[500px] lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-[1000px] xl:gap-6 lg:px-8 mx-auto">
                {[
      "La prima nunca aumenta.",
      "Sin visitas de agentes.",
      "No hay examen médico para calificar.",
      "No se debe pagar dinero por adelantado.",
      "Beneficio libre de impuestos.",
      "La cobertura nunca disminuye.",
    ].map((benefit, index) => (
      <li key={index} className="flex flex-row gap-2 items-start">
        <FontAwesomeIcon icon={faCircleCheck} className="text-xl 3xl:text-[1.8rem] text-primary mt-1" />
        <p className="font-body w-64 lg:w-full text-[1.1rem] lg:text-[1.2rem] xl:text-[1.4rem]">{benefit}</p>
      </li>
    ))}
            </ul>
            <div className="flex justify-center">
                <h3 className="font-heading text-dark text-center text-[1.1rem] lg:text-[1.18rem] xl:text-[1.3rem] 2xl:text-[1.5rem] 3xl:text-[1.7rem] w-[80%] tracking-wide mt-4 2xl:mt-20">Agenda tu consulta con un asesor ViBA</h3>
            </div>
            <div className="bg-sectionBg w-[90%] mx-auto text-center h-[300px] mt-6 lg:mt-14 ">FORMULARIO</div>
            <div className="flex flex-col gap-4 mt-10 2xl:mt-16 text-center items-center mx-auto">
                <p className="font-body w-64 lg:w-full text-[1.2rem] lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.5rem] text-primary  font-heading">¿Quieres hacerlo tú mismo? Haz un click aquí.</p>
                <button className="w-[85%] lg:max-w-[30%] xl:max-w-[25%] 2xl:max-w-[22%] mx-auto h-[50px] lg:h-[55px] bg-primary text-[1.15rem] lg:text-[1.2rem] xl:text-[1.3rem] 3xl:text-[1.4rem] text-light font-bold px-4 lg:px-0 rounded-xl shadow-custom hover:bg-primaryHover tracking-wide 2xl:mt-4">ETHOS<FontAwesomeIcon icon={faArrowPointer} /></button>
            </div>
        </section>
    );
}

export default ChooseUs;
import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {

    const testimonials = [
        { title: 'Siento Paz!!!', text: 'La verdad no tenia mucha idea de lo que un seguro significaba y todas sus ventajas, gracias a la forma clara de explicar todo, pude entender el producto y entender la necesidad que tenia de un seguro, Gracias por la paciencia.', name: 'Alexmary Salas', city: 'Charlotte, NC' },
        { title: 'Servicio de calidad!', text: 'Siempre tuve dudas sobre los seguros de vida y la planificación financiera, pero en ViBa me explicaron todo de manera clara y sencilla. Sentí que realmente se preocuparon por mí y mi familia. Ahora tengo la tranquilidad de saber que estamos protegidos y con un plan para el futuro. 100% recomendados.', name: 'Yetzy Tovar', city: 'Charlotte, NC' },
        { title: '100% Recomendado!', text: 'Lo que más me gustó de ViBa Financial Services es que no me vendieron un producto, me dieron la informacion que necesitaba para poder elegir lo que realmente me convenía. Se nota que les importa el bienestar de la comunidad latina. Hoy siento que estoy construyendo un legado para mis hijos.', name: 'Adriano Nepa', city: 'Beverly Hills, CA' },
        { title: '100% Recomendado!', text: 'Lo que más me gustó de ViBa Financial Services es que no me vendieron un producto, me dieron la informacion que necesitaba para poder elegir lo que realmente me convenía. Se nota que les importa el bienestar de la comunidad latina. Hoy siento que estoy construyendo un legado para mis hijos.', name: 'Adriano Nepa', city: 'Beverly Hills, CA' },
    ];

    const scrollRef = useRef(null);
    const scroll = (direction) => {
        const container = scrollRef.current;
        if (container) {
            container.scrollBy({
                left: direction === 'left' ? -320 : 320,
                behavior: 'smooth',
            });
        }
    }

    return (
        <section className="p-6 py-24 bg-sectionBg lg:p-12 lg:pt-20 xl:p-20 relative ">
            <h2 className="font-heading font-semibold text-[1.4rem] lg:text-[1.5rem] 3xl:text-[2rem] text-center text-dark">Lo que dicen nuestros clientes</h2>
            <button
                onClick={() => scroll('left')}
                className="hidden lg:flex absolute left-4 xl:left-10 top-[330px] transform -translate-y-1/2 z-10"
            >
                <svg width="30px" height="30px" viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)">
                        <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#e55300" stroke="#e55300"
                            stroke-width="10" />
                    </g>
                </svg>

            </button>
            <button
                onClick={() => scroll('right')}
                className="hidden lg:flex absolute right-4 xl:right-10 top-[330px] transform -translate-y-1/2 z-10"
            >
                <svg width="30px" height="30px" viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group_65" data-name="Group 65" transform="translate(-831.568 -384.448)">
                        <path id="Path_57" data-name="Path 57" d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#e55300" stroke="#e55300"
                            stroke-width="10" />
                    </g>
                </svg>
            </button>

            <div ref={scrollRef} className="flex flex-col justify-center items-center gap-6 pt-16 mt-10 lg:flex-row lg:overflow-x-auto lg:scroll-snap-x lg:snap-mandatory  lg:scroll-smooth lg:ml-4 w-full max-w-[400px] lg:max-w-[95%] lg:pb-10">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between px-6 py-5 xl:px-5 xl:py-4 bg-primary rounded-lg text-white font-body shadow-md min-w-[270px] max-w-[300px] xl:min-w-[300px] xl:max-w-[340px] mx-auto h-[370px]"
                    >
                        <div>
                            <h3 className="font-bold text-[1.2rem] leading-tight xl:text-[1.1rem] xl:leading-snug tracking-wide">
                                {item.title}
                            </h3>
                            <p className="text-sm xl:text-[0.95rem] leading-relaxed mt-2 overflow-hidden text-ellipsis line-clamp tracking-wide">
                                {item.text}
                            </p>
                        </div>
                        <div className="flex flex-col mt-auto pt-4">
                            <p className="font-bold text-[0.9rem] xl:text-[1rem]">{item.name}</p>
                            <span className="text-[0.85rem] xl:text-[0.95rem]">{item.city}</span>
                        </div>
                    </div>




                ))}
            </div>
            <div className="flex justify-center">
                <button className="w-[95%] lg:max-w-[50%] xl:max-w-[45%] 2xl:w-[80%] mx-auto h-[68px] lg:h-[60px] xl:h-[65px] bg-primary text-light text-[1.15rem] lg:text-[1.2rem] xl:text-[1.3rem] 3xl:text-[1.4rem] font-bold px-4 lg:px-0 pr-[70px] lg:pr-7 xl:pr-10 rounded-xl leading-[25px] lg:leading-[20px] mt-10 lg:mt-16 xl:mt-16 shadow-custom relative hover:bg-primaryHover tracking-wide">
                    Agenda tu consulta gratis
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-[2rem] lg:text-[1.8rem] xl:text-[1.5rem] 3xl:text-[1.8rem] text-light absolute top-[18px] lg:top-[15px] xl:top-[20px] 3xl:top-[20px] right-7 lg:right-5 xl:right-10 3xl:right-10" />
                </button>
            </div>

        </section>
    );
}

export default Testimonials;
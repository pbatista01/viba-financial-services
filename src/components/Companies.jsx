import companyLogos from '../data/companyLogos';

function Companies() {
    return (
        <section className="p-6 py-24 lg:p-12 lg:pt-24 xl:p-20" id="aliados">
            <h2 className="font-heading text-[1.4rem] lg:text-[1.5rem] xl:text-[1.6rem] 3xl:text-[2rem] text-dark text-center">Comparamos más de 37 empresas con calificación A</h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 items-center gap-6 mt-10">
                {companyLogos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.name}
                        className="w-[90%]"
                    />
                ))}
            </div>
        </section>
    );
}

export default Companies;
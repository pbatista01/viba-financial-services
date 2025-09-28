import companyLogos from '../data/companyLogos';

function Companies() {
    return (
        <section className="p-6 pt-16">
            <h2 className="font-heading text-[1.4rem]">Comparamos más de 37 empresas con calificación A</h2>
            <div className="grid grid-cols-2 gap-6 mt-10">
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
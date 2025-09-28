import companyLogos from '../data/companyLogos';

function Companies() {
    return (
        <section>
            <h2>Comparamos más de 37 empresas con calificación A</h2>
            <div>
                {companyLogos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.name}
                    />
                ))}
            </div>
        </section>
    );
}

export default Companies;

function Resources({data}){
    return(
        <section className="p-6 py-24 lg:px-[72px] xl:px-24" id="herramientas">
            <h2 className="font-heading text-[1.4rem] xl:text-[1.6rem] 3xl:text-[2rem] text-center text-dark">{data.title}</h2>
            <h3 className="font-body text-dark text-[1.1rem] lg:text-[1.18rem] xl:text-[1.25rem] 2xl:text-[1.4rem] 3xl:text-[1.7rem] tracking-wide mt-10 lg:mt-16 2xl:mt-20"> {data.subtitle.split("entender, comparar y decidir mejor")[0]} <span className="text-primary font-semibold">entender, comparar y decidir mejor</span></h3>
            <div>
                <img src={new URL(`../assets/${data.image}`, import.meta.url).href}
          alt="Recursos"
          className="mx-auto"/>
            </div>
        </section>
    );
}

export default Resources;
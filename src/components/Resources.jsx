
function Resources({data}){
    return(
        <section className="p-6 py-24 lg:px-[72px] xl:px-24" id="herramientas">
            <h2 className="font-heading text-[1.4rem] lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] 3xl:text-[2rem] text-center text-dark">{data.title}</h2>
            <h3 className="font-body text-dark text-[1.1rem] lg:text-[1.18rem] xl:text-[1.25rem] 2xl:text-[1.4rem] 3xl:text-[1.7rem] tracking-wide mt-6 lg:mt-12 xl:mt-14 2xl:mt-16"> {data.subtitle.split("entender, comparar y decidir mejor")[0]} <span className="text-primary font-semibold">entender, comparar y decidir mejor</span></h3>
            <div>
                <img src={new URL(`../assets/${data.image}`, import.meta.url).href}
          alt="Recursos"
          className="mx-auto w-[90%] max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] 3xl:max-w-[700px]"/>
            </div>
        </section>
    );
}

export default Resources;
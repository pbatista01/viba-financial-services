import aboutUsImage from "../assets/aboutUsimage1.png"

function AboutUs({data}){
    return(
        <section className="bg-primary text-light px-6 py-24 lg:px-[72px] xl:px-22" id="nosotros">
            <h2 className="text-center text-[1.4rem] lg:text-[1.3rem] xl:text-[1.6rem] 3xl:text-[2rem] font-heading">{data.title}</h2>
            <div className="flex flex-col justify-center lg:flex-row lg:justify-start lg:items-center 2xl:items-start">
            <img src={aboutUsImage} className="mt-6 2xl:mt-14 rounded-lg order-5 lg:order-2 lg:w-[50%] lg:h-[70%] xl:w-[45%] xl:h-[30%] xl:mx-0"/>
            <div className=" mt-12 lg:order-5 flex flex-col lg:mt-6 lg:gap-2 xl:gap-8 lg:pl-8 xl:pl-16">
                {data.paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-[1.1rem] lg:text-[0.85rem] xl:text-[1.1rem] 3xl:text-[1.3rem] font-body mt-4 lg:mt-0 xl:mt-4 2xl:mt-6 3xl:mt-20 leading-[35px] lg:leading-[25px] xl:leading-[30px] 2xl:leading-[35px]"
            >
              {text}
            </p>
          ))}
            </div>
            </div>
        </section>
    );
}

export default AboutUs;
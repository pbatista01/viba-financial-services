import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AboutUs from "./components/AboutUs"
import Companies from "./components/Companies"
import Testimonials from "./components/Testimonials"
import Resources from "./components/Resources"
import JoinUs from "./components/JoinUs"
import ChooseUs from "./components/ChooseUs"
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {

  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}content.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Contenido cargado:", data);
        setContent(data);
      })
      .catch((err) => console.error("Error cargando JSON:", err));
  }, []);

  if (!content) return <p>Cargando...</p>;

  return (
    <>
      {content && <Navbar data={content.navbar}/>}
      {content && <Hero data={content.hero} />}
      {content && <ServicesSection data={content.services}/>}
      {content && <AboutUs data={content.aboutUs} />}
      {content && <Companies data={content.companies} />}
      {content && <Testimonials data={content.testimonials} />}
      {content && <Resources data={content.resources} />}
      {content && <JoinUs data={content.joinUs} />}
      {content && <ChooseUs data={content.chooseUs} />}
      {content && <Footer data={content.footer} />}
    </>
  );
}

export default App;

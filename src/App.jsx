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

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutUs />
      <Companies />
      <Testimonials />
      <Resources />
      <JoinUs />
      <ChooseUs />
      <Footer />
    </>
  );
}

export default App;

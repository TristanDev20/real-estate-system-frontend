import banner from '../assets/images/background/banner.jpg';
import FeaturedProjects from "../components/FeaturedProjects";
import '../App.css';
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
    <div
      className="home-banner"
      style={{
        backgroundImage: `url(${banner})`
      }}
    >
      <h1 className="display-4 fw-bold text-white text-center">
        Find Your Dream Property
      </h1>
  </div>
  
    <FeaturedProjects />
    <AboutSection />
    <ContactSection />
  

  </>
  );
}

export default Home;

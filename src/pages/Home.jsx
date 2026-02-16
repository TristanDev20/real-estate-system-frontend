import banner from '../assets/images/background/banner.jpg';
import FeaturedProjects from "../components/FeaturedProjects";
import '../App.css';

function Home() {
  return (
    <>
    <div
      className="home-banner"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        height: "100vh"
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}             
      >
      <h1 className="display-4 fw-bold text-white text-center">Home Page</h1>
    </div>
  </div>

    <FeaturedProjects />

  </>
  );
}

export default Home;

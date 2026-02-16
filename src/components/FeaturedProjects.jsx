import ProjectCard from "./ProjectCard";
import card from '../assets/images/background/card.png';

function FeaturedProjects() {

  const projects = [
    {
      id: 1,
      title: "Modern Green Villas",
      location: "Cebu City",
      price: "₱5,000,000",
      image: card
    },
    {
      id: 2,
      title: "Eco Smart Residences",
      location: "Davao City",
      price: "₱3,800,000",
      image: card
    },
    {
      id: 3,
      title: "Luxury Forest Homes",
      location: "Manila",
      price: "₱7,200,000",
      image: card
    }
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Featured Projects</h2>

      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;

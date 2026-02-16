function ProjectCard({ project }) {
  return (
    <div className="card shadow-sm h-100">
      <img
        src={project.image}
        className="card-img-top"
        alt={project.title}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text text-muted">{project.location}</p>
        <p className="fw-bold text-success">{project.price}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

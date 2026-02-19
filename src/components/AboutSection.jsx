function AboutSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">About Viridis Natura</h2>
            <p className="text-muted">
              Viridis Natura Real Estate is a forward-thinking property
              developer focused on sustainable communities and smart living.
            </p>
            <p>
              We design eco-conscious residential projects that integrate
              nature, innovation, and long-term investment value —
              creating homes where families thrive.
            </p>
            <button className="btn btn-success mt-3">
              Learn More
            </button>
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Viridis Natura Community"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;

function ContactSection() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Contact Us</h2>
          <p>Let’s help you find your dream home.</p>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email Address"
            />
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h5>Viridis Natura Real Estate</h5>
              <p>Cebu City, Philippines</p>
              <p>Email: info@viridisnatura.com</p>
              <p>Phone: +63 912 345 6789</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-success px-4">Send Message</button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

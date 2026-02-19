import { useNavigate } from "react-router-dom";

function EmployeeLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMP login logic (we’ll improve later)
    navigate("/employee-dashboard");
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Employee Login</h2>

      <form onSubmit={handleLogin} className="col-md-6 mx-auto">
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          required
        />
        <button className="btn btn-success w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default EmployeeLogin;

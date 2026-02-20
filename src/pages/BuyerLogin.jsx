import { useNavigate } from "react-router-dom";
import loginbackground1 from '../assets/images/background/loginbackground1.png';

function BuyerLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    navigate("/buyer-dashboard");
  };

  return (
    <div className="employee-login-container">
      <div className="row g-0 h-100">
  
        
        <div className="col-md-6 d-flex align-items-center justify-content-center login-form-side">
          <div className="login-form-wrapper">
            <h2 className="fw-bold mb-4 text-center">Buyer Login</h2>
  
            <form onSubmit={handleLogin}>
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
        </div>
  
        
        <div className="col-md-6 login-image-side">
          <img
            src={loginbackground1}
            alt="Viridis Natura Community"
            className="employee-login-background"
          />
        </div>
  
      </div>
    </div>
  );
  }
  

export default BuyerLogin;

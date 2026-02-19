import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavBar';
import Projects from './components/FeaturedProjects';
import Home from './pages/Home';
import EmployeeLogin from "./pages/EmployeeLogin";
import BuyerLogin from "./pages/BuyerLogin";
import EmployeeDashboard from './pages/EmployeeDashboard';
import BuyerDashboard from './pages/BuyerDashboard';

function App() {
  return (
    <Router>
      <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/buyer-login" element={<BuyerLogin />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} /> 
        </Routes>
    </Router>
  );
}

export default App;

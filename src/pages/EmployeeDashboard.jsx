import TopNavbar from "../components/TopNavbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";

function EmployeeDashboard() {
  return (
    <div>
      <TopNavbar />
      <div className="dashboard-layout">
        <Sidebar />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="sidebar">

      {/* PROJECT MANAGEMENT */}
      <div>
        <div className="sidebar-group" onClick={() => toggleMenu("projects")}>
          Project Management
        </div>

        {openMenu === "projects" && (
          <div className="sidebar-submenu">
            <Link to="/employee-dashboard/projects">Project List</Link>
            <Link to="/employee-dashboard/projects/add">Add New Project</Link>
            <Link to="/employee-dashboard/projects/status">Project Status</Link>
          </div>
        )}
      </div>

      {/* CLIENT MANAGEMENT */}
      <div>
        <div className="sidebar-group" onClick={() => toggleMenu("clients")}>
          Client Management
        </div>

        {openMenu === "clients" && (
          <div className="sidebar-submenu">
            <Link to="/employee-dashboard/clients">Client List</Link>
            <Link to="/employee-dashboard/clients/applications">Applications</Link>
            <Link to="/employee-dashboard/clients/reservations">Reservations</Link>
          </div>
        )}
      </div>

      {/* SALES */}
      <div>
        <div className="sidebar-group" onClick={() => toggleMenu("sales")}>
          Sales & Transactions
        </div>

        {openMenu === "sales" && (
          <div className="sidebar-submenu">
            <Link to="/employee-dashboard/sales">Sales List</Link>
            <Link to="/employee-dashboard/sales/payments">Payments</Link>
            <Link to="/employee-dashboard/sales/commissions">Commissions</Link>
          </div>
        )}
      </div>

      {/* REPORTS */}
      <div>
        <div className="sidebar-group" onClick={() => toggleMenu("reports")}>
          Reports
        </div>

        {openMenu === "reports" && (
          <div className="sidebar-submenu">
            <Link to="/employee-dashboard/reports/sales">Sales Report</Link>
            <Link to="/employee-dashboard/reports/projects">Project Performance</Link>
            <Link to="/employee-dashboard/reports/agents">Agent Performance</Link>
          </div>
        )}
      </div>

    </div>
  );
}

export default Sidebar;
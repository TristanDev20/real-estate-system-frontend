import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function TopNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/employee-dashboard">
          Viridis Natura Admin
        </Navbar.Brand>

        <Nav className="ms-auto">

          {/* SYSTEM DROPDOWN */}
          <NavDropdown title="System" id="system-dropdown">
            <NavDropdown.Item as={Link} to="/employee-dashboard">
              Dashboard
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/employee-dashboard/projects">
              Projects
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/employee-dashboard/clients">
              Clients
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/employee-dashboard/sales">
              Sales
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/employee-dashboard/reports">
              Reports
            </NavDropdown.Item>
          </NavDropdown>

          {/* SETTINGS DROPDOWN */}
          <NavDropdown title="Settings" id="settings-dropdown">
            <NavDropdown.Item as={Link} to="/employee-dashboard/users">
              User Management
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/employee-dashboard/company">
              Company Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/">
              Logout
            </NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
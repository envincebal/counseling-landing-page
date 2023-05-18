import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand>DaVine Counseling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            <NavDropdown
              title="Specialties/Clinical Interests"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/fbcc">
                Faith-Based Christian Counseling
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/emdr">
              EMDR: Eye Movement Desensitization and Reprocessing
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/tfcbt">
                Trauma-Focused Cognitive-Behavior Therapy
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/ppd">
                Postpartum/Maternal Mental Health
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/rates">
              Rates and Insurance
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

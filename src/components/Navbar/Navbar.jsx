import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand>DaVine Counseling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName="">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <NavDropdown
              title="Specialties/Clinical Interests"
              id="basic-nav-dropdown"
            >
              <LinkContainer to="/fbcc">
                <NavDropdown.Item>
                  Faith-Based Christian Counseling
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/emdr">
                <NavDropdown.Item>
                  Eye Movement Desensitizing/Reprocessing
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/tfcbt">
                <NavDropdown.Item>
                  Trauma-Focused Cognitive-Behavior Therapy
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/ppd">
                <NavDropdown.Item>
                  Postpartum/Maternal Mental Health
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/rates">
              <Nav.Link>Rates and Insurance</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar style={{ backgroundColor: "rgb(48, 240, 48)", width: "100%", height:"100px" }}  className="shadow-sm mb-2">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          <img src='https://www.adobe.com/express/learn/blog/media_1a40240379ea43a356c92b5b3d9a5bae5947bbb52.png?width=750&format=png&optimize=medium' style={{ width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/catalog">Cataloge</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>

            <Nav.Link as={Link} to="/order-history">Order History</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Login</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

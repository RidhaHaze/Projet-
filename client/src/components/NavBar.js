import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from "react-router-dom"

function NavBar() {
    return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Web7arka</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/contacts'>Contacts</Nav.Link>
        <Nav.Link as={Link} to='/addEdit'>Add Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    );
}

export default NavBar;
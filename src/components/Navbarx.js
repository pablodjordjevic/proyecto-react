import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown, Container } from 'react-bootstrap'


export default class Navbarx extends Component {
  render() {
    return (
    <div>
      <Navbar id="colorNav" expand="lg">
        <Container>
          <Navbar.Brand href="#home"> DESAFIO NavBar Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">6/09</Nav.Link>
              <Nav.Link href="#link">Favoritos</Nav.Link>
              <NavDropdown title="Cuenta" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Accion 01</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Accion 02</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Accion 03</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Accion 04</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    )
    }
  }
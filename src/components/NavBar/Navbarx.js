import { Fragment } from 'react';
import { Navbar,Nav,NavDropdown, Container } from 'react-bootstrap'
import CartNav from '../CartNav/CartNav';
import './NavBar.css'
import { Link } from 'react-router-dom';



const  Navbarx = () => {
  return (
    <Fragment>
      <Navbar id="colorNav" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CREARTE MANUALIDADES </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/Shop">Shop</Link>
              <Link className="nav-link" to="/itemdetail">ItemDetail</Link>
            </Nav>
          </Navbar.Collapse>
          <CartNav />
        </Container>
      </Navbar>
    </Fragment>
    )
    }
export default Navbarx;

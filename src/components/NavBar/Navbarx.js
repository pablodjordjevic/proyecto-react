import React from 'react';
import { Fragment } from 'react';
import { Navbar,Nav, Container } from 'react-bootstrap'
import CartNav from '../CartNav/CartNav';
import './NavBar.css'
import { Link } from 'react-router-dom';
import LogoCrearte from '../../image/logo/crearte-logo_logo.svg';


const  Navbarx = () => {
  return (
    <Fragment>
      <Navbar expand="lg">
        <Container>
        <Link to="/"><img src={LogoCrearte} className="imgNavbar" alt="CrearteLogo"/></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbarCollapse">
            <Nav>
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

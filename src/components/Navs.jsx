import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import "./Navs.css";

const Navs = () => {
  return (
    <div>
      <Navbar expand="lg" className="bgbg fixed-top">
        <Container>
          <Navbar.Brand className="PHONE">LUXURY PHONES</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="wikoo">
              <Nav className="">
                <div className="gates">
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={300}
                    className="dgdg"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="active"
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={300}
                    className="dgdg"
                  >
                    Products
                  </Link>
                  <Link
                    activeClass="active"
                    to="features"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={300}
                    className="dgdg"
                  >
                    features
                  </Link>
                  <Link
                    activeClass="active"
                    to="message"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={300}
                    className="dgdg"
                  >
                    Order
                  </Link>
                  <Link
                    activeClass="active"
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={300}
                    className="dgdg"
                  >
                    About
                  </Link>
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;

/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
class MyNav extends Component {
  render() {
    return (
      <div className="fixed-top">
        <Navbar expand="lg" className="mynav" style={{ width: "100%" }}>
          <Navbar.Brand href="#home">
            <Link className="mylogo" to="/">
              Jo's
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link className="mymenu active" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="mymenu" to="/about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="mymenu" to="/order">
                  Place Order
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="mymenu" to="/gallery">
                  Gallery
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="mymenu" to="/contact">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNav;

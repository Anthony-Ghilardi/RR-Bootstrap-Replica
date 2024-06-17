import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

export default function Topbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="px-3">
        <Navbar.Brand href="#home">
          <img
            style={{ width: 200 }}
            src={require("../Assets/Instacart_logo.png")}
            alt="Instacart Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
          <Nav className="w-100 justify-content-between">
            <div></div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: "500px", height: "40px" }}
              />
              <Button variant="outline-success" style={{ height: "40px" }}>
                Search
              </Button>
            </Form>
            <div>
              <Nav.Link href="#LogIn" className="me-2">
                Log In
              </Nav.Link>
              <Button variant="success">Sign Up</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

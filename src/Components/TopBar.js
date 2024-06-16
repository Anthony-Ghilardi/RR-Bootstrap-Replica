import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

export default function Topbar() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
        <img
          style={{ width: 200 }}
          src={require("../Assets/Instacart_logo.png")}
          alt="Instacart Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#LogIn">Log In</Nav.Link>
          <Button variant="success">Sign Up</Button>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

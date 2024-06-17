import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function StoreListings() {
  return (
    <div>
      <h2>Browse stores in Houston</h2>
      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Image
              style={{
                height: "55px",
                width: "50px",
                border: "1px solid #E8E9EB",
              }}
              src={require("../Assets/Smithslogo.png")}
              roundedCircle
            />
            <div className="ms-2">
              <h5 style={{ fontWeight: "bold" }}>SMITHS</h5>
              <p>Delivery & Pickup</p>
            </div>
          </Col>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Image
              style={{
                height: "55px",
                width: "50px",
                border: "1px solid #E8E9EB",
              }}
              src={require("../Assets/Sprouts.jpg")}
              roundedCircle
            />
            <div className="ms-2">
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery & Pickup</p>
            </div>
          </Col>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Image
              style={{
                height: "55px",
                width: "50px",
                border: "1px solid #E8E9EB",
              }}
              src={require("../Assets/Kroger_logo.svg.png")}
              roundedCircle
            />
            <div className="ms-2">
              <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
              <p>Delivery Only</p>
            </div>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Image
              style={{
                height: "55px",
                width: "50px",
                border: "1px solid #E8E9EB",
              }}
              src={require("../Assets/Smithslogo.png")}
              roundedCircle
            />
            <div className="ms-2">
              <h5 style={{ fontWeight: "bold" }}>SMITHS</h5>
              <p>Delivery & Pickup</p>
            </div>
          </Col>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Image
              style={{
                height: "55px",
                width: "50px",
                border: "1px solid #E8E9EB",
              }}
              src={require("../Assets/Sprouts.jpg")}
              roundedCircle
            />
            <div className="ms-2">
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery & Pickup</p>
            </div>
          </Col>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Image
              style={{
                height: "55px",
                width: "50px",
                border: "1px solid #E8E9EB",
              }}
              src={require("../Assets/Kroger_logo.svg.png")}
              roundedCircle
            />
            <div className="ms-2">
              <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
              <p>Delivery Only</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

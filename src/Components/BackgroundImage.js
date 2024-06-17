import React from "react";
import Card from "react-bootstrap/Card";

export default function BackgroundImage() {
  return (
    <div>
      <Card
        style={{
          backgroundColor: "#deedd6",
          color: "#003121",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Card.Img
          src={require("../Assets/Background.jpg")}
          alt="Fruits Image"
          style={{ width: 200, height: "100%", objectFit: "cover" }}
        />
        <Card.ImgOverlay style={{ flex: 1, paddingRight: 20 }}>
          <Card.Title style={{ fontSize: "3rem" }}>
            Order groceries for delivery or pickup today
          </Card.Title>
          <Card.Text style={{ fontSize: "2rem" }}>
            Whatever you want from local stores, brought right to your door
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

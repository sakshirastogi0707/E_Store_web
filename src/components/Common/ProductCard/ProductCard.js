import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { CustomButton } from "../Button/Button";
import "./ProductCard.css";

export default function ProductCard({ title, image, onClick }) {
  return (
    <CardGroup className="card-group">
      <Card className="card">
        <Card.Img className="card-img" variant="top" src={image} />
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <CustomButton
            onClick={onClick}
            type={"button"}
            title={"View Details"}
          />
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

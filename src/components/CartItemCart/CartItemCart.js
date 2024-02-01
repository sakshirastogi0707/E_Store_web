import React from "react";
import "./CartItemCart.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import Quantity from "../Quantity/Quantity";

export default function CartItemCart({
  image,
  price,
  quantity,
  onRemove,
  onIncrement,
  onDecrement,
}) {
  return (
    <Container className="cart-item-container">
      <Row className="cart-item border">
        <Col className="item">
          <img
            className="cart-product-image img-fluid"
            src={image}
            alt="Product Image"
          />
        </Col>
        <Col className="price">
          <p>Price: ${price}</p>
        </Col>
        <Col className="quantity-container">
          <Quantity
            quantity={quantity}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </Col>
        <Col className="remove-btn">
          <Button variant="outline-secondary" size="sm" onClick={onRemove}>
            Remove
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

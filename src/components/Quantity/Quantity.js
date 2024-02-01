import React from "react";
import { Button } from "react-bootstrap";
import "./Quantity.css";

export default function Quantity({ quantity, onIncrement, onDecrement }) {
  return (
    <div className="quantity">
      <label>Quantity: </label>
      <Button
        className="btn btn-outline-dark quantity-button"
        onClick={onIncrement}
      >
        +
      </Button>
      <Button className="btn show-quantity">{quantity}</Button>
      <Button
        className="btn btn-outline-dark quantity-button"
        onClick={onDecrement}
      >
        -
      </Button>
    </div>
  );
}

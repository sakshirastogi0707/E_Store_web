import React from "react";
import "./InputField.css";
import { Form, Col } from "react-bootstrap";

export const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  isValid,
  error,
}) => {
  
  return (
    <Form.Group
      className="from-group"
      as={Col}
      md="4"
      controlId="validationFormik01"
    >
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        isValid={isValid}
      />
      <p className="error">{error}</p>
    </Form.Group>
  );
};

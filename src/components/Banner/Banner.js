import React from "react";
import { CustomButton } from "../Common/Button/Button";
import { Container } from "react-bootstrap";

export default function Banner() {
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column mt-lg-5">
      <h2>
        Discover endless possibilities with our curated collection of must-have
        products!
      </h2>
      <h4  className="mb-3">
        Shop smart, live better - explore our diverse range of high-quality
        products
      </h4>
      <CustomButton title={"GO TO LOGIN"} />
    </Container>
  );
}

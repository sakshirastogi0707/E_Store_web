import React from "react";
import appLogo from "../../../assets/images/logo.jpg";
import "./HeaderBrand.css";

export default function HeaderBrand() {
  return (
    <a href="/">
      <img className="logo img-fluid" src={appLogo} />
    </a>
  );
}

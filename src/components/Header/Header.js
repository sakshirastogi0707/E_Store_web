import React from "react";
import HeaderBrand from "./HeaderBrand/HeaderBrand";
import HeaderMenuItem from "./HeaderMenuItem/HeaderMenuItem";
import './Header.css'

export default function Header() {
  return (
    <div className="nav-container">
      <nav className="nav-wrapper">
        <div className="left-items">
          <HeaderBrand />
        </div>
        <div className="right-items">
          <HeaderMenuItem/>
        </div>
      </nav>
    </div>
  );
}

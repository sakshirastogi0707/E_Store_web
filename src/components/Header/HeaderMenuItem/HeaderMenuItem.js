import React from "react";
import menuData from "../HeaderLinks.json";
import "./HeaderMenuItem.css";
import { Profile } from "../UserProfile/Profile";
import Cart from "../../Cart/Cart";

export default function HeaderMenuItem() {
  return (
    <div className="menu-item-container">
      {menuData.menu.map((item) => (
        <a key={item.label} className="nav-links" href={item.link}>
          {item.label}
        </a>
      ))}
      <Cart/>
      <Profile />
    </div>
  );
}

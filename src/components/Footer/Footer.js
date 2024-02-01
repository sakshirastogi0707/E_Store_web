import React from "react";
import "./Footer.css";
import { getYear } from "../../utils/helperFunctions";

export default function Footer() {
  const year = getYear();
  return (
    <footer className="app-footer">
      <p>© {`${year}`} Sakshi Rastogi</p>
    </footer>
  );
}

import React from "react";
import './Button.css'
import { Button } from "react-bootstrap";

export const CustomButton = ({ title, type, onClick,bgColor })=> {
  return (
    <Button type={type} onClick={onClick} className="btn custom-btn" style={{background:`${bgColor}`}}>
      {title}
    </Button>
  );
}

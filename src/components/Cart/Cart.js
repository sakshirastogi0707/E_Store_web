import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Cart.css";
export default function Cart() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.cart.items.length);

  return (
    <div className="cart">
      <span class="count">{count}</span>
      <FaCartArrowDown
        fontSize={20}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/shopping-cart")}
      />
    </div>
  );
}

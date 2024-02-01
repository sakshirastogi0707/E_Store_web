import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";
import CartItemCart from "../CartItemCart/CartItemCart";
import { useSelector, useDispatch } from "react-redux";
import { ProductService } from "../../services/api/product.service";
import { toast } from "react-toastify";
import { messages } from "../../constants/msg";
import {
  removeItem,
  getTotal,
  incrementQuantity,
  decrementQuantity,
} from "../../Store/Slices/Cart";
import { Col, Row, Container, Button } from "react-bootstrap";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state?.cart.items);
  const dispatch = useDispatch();
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);

  const removeFromCart = async (id) => {
    const res = await ProductService.removeFromCart(id);
    if (res.status) {
      toast.success(messages.REMOVED_PRODUCT);
      dispatch(removeItem(id));
      dispatch(getTotal());
    } else {
      toast.success(messages.ADDTOCART_ERROR);
    }
  };

  const handleIncrement = (itemId) => {
    setQuantity((prev) => prev + 1);

    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    setQuantity((prev) => prev - 1);
    dispatch(decrementQuantity(itemId));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [quantity, dispatch]);

  return (
    <Container className="shopping-cart-wrapper">
      <Row className="items-wrapper">
        {cartItems.map((item) => {
          return (
            <CartItemCart
              key={item.id}
              image={item?.image}
              price={item.price}
              quantity={item.quantity}
              onDecrement={() => handleDecrement(item.id)}
              onIncrement={() => handleIncrement(item.id)}
              onRemove={() => removeFromCart(item?.id)}
            />
          );
        })}
      </Row>

      <Col className="total-amount">
        <Row>
          <h2>Total Amount</h2>
        </Row>
        <Row>
          <h2>{`$${totalAmount}`}</h2>
        </Row>
      </Col>
    </Container>
  );
}

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductDetail.css";
import { toast } from "react-toastify";
import { CustomButton } from "../Common/Button/Button";
import Rating from "../Common/Rating/Rating";
import { messages } from "../../constants/msg";
import { useSelector, useDispatch } from "react-redux";
import { ProductService } from "../../services/api/product.service";
import { TempStorageService } from "../../services/core/temp.storage.service";
import { FaArrowLeft } from "react-icons/fa6";
import { resetProduct } from "../../Store/Slices/Product";
import { addToCart, incrementQuantity } from "../../Store/Slices/Cart";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state?.product.selectedProduct);
  const [quantity, setQuantity] = useState(1);

  const formatDescriptionList = () => {
    if (!product || !product.description) {
      return null;
    }

    const descriptionList = product.description
      .split(",")
      .map((item, index) => <li key={index}>{item.trim()}</li>);

    return <ul className="list">{descriptionList}</ul>;
  };

  const addToCartHandler = async () => {
    if (!product) {
      return null;
    }

    const userId = TempStorageService.getCookie("UserId");
    const cartItem = { productId: product.id, quantity: quantity };

    const requestParams = {
      userId: userId,
      products: [cartItem],
    };

    const res = await ProductService.addToCart(requestParams);

    if (res.status) {
      toast.success(messages.ADDTOCART_SUCCESS);
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: quantity,
        })
      );
    } else {
      toast.error(messages.ADDTOCART_ERROR);
    }
  };

  return (
    <Container className="container mt-5 main">
      {!product ? (
        <>
          <p>Your cart is empty!!!</p>
        </>
      ) : (
        <Row>
          <Col className="left p-0">
            <Row>
              <img
                className="product-image"
                src={product?.image}
                alt={product?.title}
              />
            </Row>
          </Col>
          <Col className="right">
            <h1 className="title">{product?.title}</h1>
            <p className="pro-price">Price: ${product?.price}</p>
            <div className="rating">
              {product && product.rating && (
                <Rating
                  rate={product.rating.rate}
                  count={product.rating.count}
                />
              )}
            </div>
            <div className="product-description">
              <h3 className="dis-text">Description</h3>
              {formatDescriptionList()}
            </div>
            <div className="button-container">
              <CustomButton onClick={addToCartHandler} title="Add To Cart" />
              <CustomButton title={"Buy Product"} bgColor={"#f39c12"} />
            </div>
            <div className="navigate-back">
              <FaArrowLeft />
              <a
                href="/product-listing"
                onClick={() => dispatch(resetProduct(product.id))}
              >
                Go Back To Product Listing Page
              </a>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}

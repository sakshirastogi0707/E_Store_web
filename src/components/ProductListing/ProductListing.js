import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../Common/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { ProductService } from "../../services/api/product.service";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, setSelectedProduct } from "../../Store/Slices/Product";

export default function ProductListing() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getAllProducts = async () => {
    try {
      const res = await ProductService.getAllProduct();
      if (res.status) {
        dispatch(setProducts(res.data));
      } else {
        toast.error("Error in fetching data");
      }
    } catch (error) {
      toast.error("An error occurred while fetching data");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Container className="mt-lg-5 mb-lg-5">
      <Row>
        {products.map((item) => (
          <Col key={item.id} className="col-3 mb-2">
            <ProductCard
              title={item.title}
              onClick={() => {
                dispatch(setSelectedProduct(item));
                navigate(`/Product-details`);
              }}
              image={item.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

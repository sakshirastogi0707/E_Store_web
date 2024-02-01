import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListingPage from "./views/Product-Listing/ProductListing";
import PrivateRoute from "./utils/ProtectedRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetailPage from "./views/Product-detail/ProductDetailPage";
import ShoppingCartPage from "./views/Shoping-cart/ShoppingCart";
import { Provider } from "react-redux";
import store from "./Store/Store";
import Home from "./views/Home/Home";

export const AppWithLayout = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path={"/product-listing"} element={<PrivateRoute />}>
            <Route
              exact
              path="/product-listing"
              element={<ProductListingPage />}
            />
          </Route>
          <Route path={"/product-details"} element={<PrivateRoute />}>
            <Route
              exact
              path="/product-details"
              element={<ProductDetailPage />}
            />
          </Route>
          <Route path={"/shopping-cart"} element={<PrivateRoute />}>
            <Route exact path="/shopping-cart" element={<ShoppingCartPage />} />
          </Route>

          <Route exact path="/" element={<Home />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="light"
          transition={Zoom}
          limit={4}
        />
        <Footer />
      </Provider>
    </Router>
  );
};

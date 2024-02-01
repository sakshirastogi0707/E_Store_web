import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./authService";

const PrivateRoute = ({ path, Component }) => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

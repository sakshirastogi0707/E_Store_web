export const baseUrl = "https://reqres.in/api";
export const baseUrl2 = "https://fakestoreapi.com";

export const login = "/login";
export const logout = "/logout";
export const getProduct = "/products";
export const getProductById = (id) => {
  return `/products/${id}`;
};
export const addToCart = "/carts";
export const updateCart = (id) => {
  return `/carts/${id}`;
};
export const removeFromCart = (id) => {
  return `/carts/${id}`;
};

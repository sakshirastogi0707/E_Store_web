import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      console.log(action.payload, "............payload");
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    resetProduct: (state) => {
      state.products = [];
      state.selectedProduct = null;
    },
  },
});

export const { setProducts, setSelectedProduct, resetProduct } =
  productSlice.actions;

export default productSlice.reducer;

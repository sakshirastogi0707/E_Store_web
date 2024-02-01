import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const targetedItemIndex = action.payload;
      const cartItemIndex = state.items.findIndex(
        (item) => item.id == targetedItemIndex
      );

      if (cartItemIndex >= 0) {
        state.items[cartItemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.items.push(tempProduct);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    incrementQuantity(state, action) {
      const targetedItemIndex = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.id == targetedItemIndex
      );

      state.items[itemIndex].quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    decrementQuantity(state, action) {
      const targetedItemIndex = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.id == targetedItemIndex
      );

      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      } else if (state.items[itemIndex].quantity === 1) {
        const inCartItems = state.items.filter(
          (item) => item.id !== targetedItemIndex
        );
        state.items = inCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeItem(state, action) {
      const targetedItemIndex = action.payload;
      const inCartItems = state.items.filter(
        (item) => item.id != targetedItemIndex
      );
      state.items = inCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotal: (state) => {
      let { total, quantity } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity: cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.totalQuantity = quantity;
      state.totalAmount = total;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;

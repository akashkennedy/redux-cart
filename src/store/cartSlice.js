import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload,
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
    incrementQuantity: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload,
      );
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload,
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

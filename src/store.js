import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice";
import { loadCart, saveCart } from "./localStorage/localStorageUtils";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: { cart: loadCart() || [] },
  },
});

store.subscribe(() => {
  saveCart(store.getState().cart.cart);
});

export default store;

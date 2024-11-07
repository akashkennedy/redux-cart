import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice";
import productReducer from "./store/productSlice";
import { loadCart, saveCart } from "./localStorage/localStorageUtils";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
  preloadedState: {
    cart: { cart: loadCart() || [] },
  },
});

store.subscribe(() => {
  saveCart(store.getState().cart.cart);
});

export default store;

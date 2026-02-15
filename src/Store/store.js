import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/productSlice";
import specificReducer from "./Slices/specificSlice";
import themeReducer from "./Slices/themeSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
    specific:specificReducer,
  },
});
export default store;

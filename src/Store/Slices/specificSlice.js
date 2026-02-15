import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById } from "../thunk/cart";

const specificSlice = createSlice({
  name: "specific",
  initialState: {
    specificProduct: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.specificProduct.push(action.payload); 
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default specificSlice.reducer;

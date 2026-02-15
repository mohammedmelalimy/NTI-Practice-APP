
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const data = await response.data;
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


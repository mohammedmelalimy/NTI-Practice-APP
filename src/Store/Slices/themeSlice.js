import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectIsDarkMode = (state) => state.theme.value;

export default themeSlice.reducer;

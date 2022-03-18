import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
  name: "theme",

  initialState: {
    theme: true
  },

  reducers: {
    switchTheme: (state) => {
      state.theme = !state.theme;
    }
  }
});

export const { switchTheme } = theme.actions;
export default theme.reducer;

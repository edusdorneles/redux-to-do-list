import { createSlice } from "@reduxjs/toolkit";

// Actions
import { switchTheme } from "store/actions/themeAction";

const themeReducer = createSlice({
  name: "theme",
  initialState: true,
  reducers: {
    switchTheme
  }
});

export default themeReducer;

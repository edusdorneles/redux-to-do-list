import { configureStore } from "@reduxjs/toolkit";

// Reducers
import themeReducer from "store/Theme.store";

const store = configureStore({
  reducer: { themeReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

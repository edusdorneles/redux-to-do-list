import { configureStore } from "@reduxjs/toolkit";

// Reducers
import themeReducer from "store/Theme.store";
import tasksReducer from "store/Tasks.store";

const store = configureStore({
  reducer: { themeReducer, tasksReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

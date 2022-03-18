import { configureStore } from "@reduxjs/toolkit";

// Reducers
import themeReducer from "store/Theme.store";
import tasksReducer from "store/Tasks.store";
import filterReducer from "store/Filter.store";

const store = configureStore({
  reducer: { themeReducer, tasksReducer, filterReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Biblioteca para gerar ID.
import { v4 as uuidv4 } from "uuid";

const task = createSlice({
  name: "theme",

  initialState: [] as Task[],

  reducers: {
    addNewTask: (state, action: PayloadAction<Task>) => {
      state.push({
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false
      });
    }
  }
});

export const { addNewTask } = task.actions;
export default task.reducer;

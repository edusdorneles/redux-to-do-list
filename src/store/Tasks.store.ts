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
    },

    completeTask: (state: any, action: PayloadAction<Task>) => {
      const completeTask = state.find(
        (task: Task) => task.id === action.payload.id
      );

      completeTask.completed = true;
      return state;
    },

    uncompleteTask: (state: any, action: PayloadAction<Task>) => {
      const uncompleteTask = state.find(
        (task: Task) => task.id === action.payload.id
      );

      uncompleteTask.completed = false;
      return state;
    },

    deleteTask: (state: any, action: PayloadAction<Task>) => {
      return state.filter((task: Task) => task.id !== action.payload.id);
    }
  }
});

export const { addNewTask, completeTask, uncompleteTask, deleteTask } =
  task.actions;
export default task.reducer;

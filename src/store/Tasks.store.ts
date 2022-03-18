import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Biblioteca para gerar ID.
import { v4 as uuidv4 } from "uuid";

const task = createSlice({
  name: "task",

  initialState: [] as Task[],

  reducers: {
    // Adcionar tarefa
    addNewTask: (state, action: PayloadAction<Task>) => {
      state.push({
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false
      });
    },

    // Completar tarefa
    completeTask: (state: any, action: PayloadAction<Task>) => {
      const completeTask = state.find(
        (task: Task) => task.id === action.payload.id
      );

      completeTask.completed = true;
      return state;
    },

    // Desfazer tarefa.
    uncompleteTask: (state: any, action: PayloadAction<Task>) => {
      const uncompleteTask = state.find(
        (task: Task) => task.id === action.payload.id
      );

      uncompleteTask.completed = false;
    },

    // Deletar tarefa.
    deleteTask: (state: any, action: PayloadAction<Task>) => {
      return state.filter((task: Task) => task.id !== action.payload.id);
    },

    // Editar tarefa.
    editTask: (state: any, action: PayloadAction<Task>) => {
      const editedTask = state.find(
        (task: Task) => task.id === action.payload.id
      );

      editedTask.title = action.payload.title;
      editedTask.description = action.payload.description;
    }
  }
});

export const {
  addNewTask,
  completeTask,
  uncompleteTask,
  deleteTask,
  editTask
} = task.actions;
export default task.reducer;

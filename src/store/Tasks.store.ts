import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Biblioteca para gerar ID.
import { v4 as uuidv4 } from "uuid";

const task = createSlice({
  name: "task",

  initialState: localStorage.getItem("redux-tasks")
    ? JSON.parse(localStorage.getItem("redux-tasks") || "{}")
    : ([] as Task[]),

  reducers: {
    // Adcionar tarefa
    addNewTask: (state: any, action: PayloadAction<Task>) => {
      state.push({
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false
      });

      localStorage.setItem("redux-tasks", JSON.stringify(state));
    },

    // Completar tarefa
    completeTask: (state: any, action: PayloadAction<Task>) => {
      const completeTask = state.find(
        (task: Task) => task.id === action.payload.id
      );

      completeTask.completed = true;

      localStorage.setItem("redux-tasks", JSON.stringify(state));
    },

    // Desfazer tarefa.
    uncompleteTask: (state: any, action: PayloadAction<Task>) => {
      const uncompleteTask = state.find(
        (task: Task) => task.id === action.payload.id
      );

      uncompleteTask.completed = false;

      localStorage.setItem("redux-tasks", JSON.stringify(state));
    },

    // Deletar tarefa.
    deleteTask: (state: any, action: PayloadAction<Task>) => {
      const deletedTask = state.findIndex(
        (task: Task) => task.id === action.payload.id
      );

      state.splice(deletedTask, 1);

      localStorage.setItem("redux-tasks", JSON.stringify(state));
    },

    // Editar tarefa.
    editTask: (state: any, action: PayloadAction<Task>) => {
      const editedTask = state.find(
        (task: Task) => task.id === action.payload.id
      );

      editedTask.title = action.payload.title;
      editedTask.description = action.payload.description;

      localStorage.setItem("redux-tasks", JSON.stringify(state));
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

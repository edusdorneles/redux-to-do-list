import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const filter = createSlice({
  name: "filter",

  initialState: "",

  reducers: {
    // Filtro das tarefas.
    filterTasks: (state: any, action: PayloadAction<any>) => {
      return (state = action.payload);
    }
  }
});

export const { filterTasks } = filter.actions;
export default filter.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const {id, title, description} = action.payload;
      const foundTask = state.find(task => task.id === id);
      if(foundTask){
        foundTask.title = title
        foundTask.description = description
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.find(task => task === action.payload);
      state.splice(state.indexOf(foundTask), 1);
    }
  },
});

export const { addTask, deleteTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;
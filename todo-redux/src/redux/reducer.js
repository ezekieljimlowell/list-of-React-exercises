import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      console.log(state);
      state.push(action.payload);
      console.log(state);
      return state;
    },

    removeTodos: (state, action) => {
      console.log(state.filter(item => item.id !== action.payload));
      return state.filter(item => item.id !== action.payload);
    },

    updateTodos: (state, action) => {
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },

    completeTodos: (state, action) => {
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = true;
        }
        return todo;
      });
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;

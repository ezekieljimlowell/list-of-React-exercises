import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },

    removeTodos: (state, action) => {
      const remove = state.filter(item => item.id !== action.payload);
      console.log(remove);
      return remove;
    },

    updateTodos: (state, action) => {
      return state.map(todo => {
        //console.log(todo.id, action.payload.id)
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item
          };
        }
        return todo;
      });
    },

    completeTodos: (state, action) => {
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true
          };
        }
        return todo;
      });
    }
  }
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;

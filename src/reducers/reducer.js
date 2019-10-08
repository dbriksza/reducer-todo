import React from "react";

export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    },
    {
      item: "make a reducer",
      completed: false,
      id: 3892987590
    },
    {
      item: "display the reducer",
      completed: false,
      id: 3892987591
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    // case "TOGGLE_EDIT":
    //   return {
    //     ...state,
    //     editing: !state.editing
    //   };
    // case "SET_TITLE":
    //   return {
    //     ...state,
    //     title: action.payload,
    //     editing: false
    //   };
    case "ADD_NEW_TODO":
      const newTodo = {
        item: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
};

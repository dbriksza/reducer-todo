import React from "react";
import { useState } from "react";

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
      completed: true,
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
    case "REMOVE_COMPLETED":
      console.log("?", state.todos);
      return {
        ...state,
        todos: state.todos.filter(done => done.completed === false)
      };
    case "ADD_NEW_TODO":
      console.log("this is work", state.todos);

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
// export const TodoDisplay = () => {
//   return (
//     <>
//       {initialState.todos.map(todos => {
//         if (todos.completed === true) {
//           return (
//             <>
//               <input type="checkbox" id={todos.id} name="todo" checked />
//               <label htmlFor={todos.id}>{todos.item}</label>
//             </>
//           );
//         } else if (todos.completed === false) {
//           return (
//             <>
//               <input type="checkbox" id={todos.id} name="todo" />
//               <label htmlFor={todos.id}>{todos.item}</label>
//             </>
//           );
//         }
//       })}
//     </>
//   );
// };

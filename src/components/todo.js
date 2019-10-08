import React from "react";
import { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState();

  const handleChanges = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_NEW_TODO", payload: input });
    setInput("");
  };
  const filterCompleted = () => {
    // e.preventDefault();
    dispatch({ type: "REMOVE_COMPLETED" });
  };

  return (
    <>
      <>
        {state.todos.map(todos => {
          if (todos.completed === true) {
            return (
              <>
                <input
                  onClick={() => (todos.completed = !todos.completed)}
                  type="checkbox"
                  id={todos.id}
                  name="todo"
                  checked
                />
                <label htmlFor={todos.id}>{todos.item}</label>
              </>
            );
          } else if (todos.completed === false) {
            return (
              <>
                <input
                  onClick={() => (todos.completed = !todos.completed)}
                  type="checkbox"
                  id={todos.id}
                  name="todo"
                />
                <label htmlFor={todos.id}>{todos.item}</label>
              </>
            );
          }
        })}
      </>
      <form onSubmit={handleSubmit}>
        <input
          className="Todo-input"
          type="text"
          name="newTodo"
          value={input}
          onChange={handleChanges}
        />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={() => filterCompleted()}>Remove Completed</button>
    </>
  );
};

export default Todo;

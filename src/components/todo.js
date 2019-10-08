import React from "react";
import { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";
import TodoDisplay from "./tododisplay";

const Todo = () => {
  const [{ name }, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState();
  const [newTodo, setNewTodo] = useState(initialState.todos);

  const handleChanges = e => {
    setInput(e.target.value);
  };

  return (
    <div>
      {newTodo.map(todo => (
        <TodoDisplay item={todo.item} completed={todo.completed} id={todo.id} />
      ))}
      <input
        className="Todo-input"
        type="text"
        name="newTodo"
        value={input}
        onChange={handleChanges}
      />
      <button
        onClick={() => dispatch({ type: "ADD_NEW_TODO", payload: input })}
      >
        Update Todo
      </button>
    </div>
  );
};

export default Todo;

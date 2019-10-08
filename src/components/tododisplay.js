import React from "react";

const TodoDisplay = props => {
  if (props.completed === true) {
    return (
      <>
        <input type="checkbox" id={props.id} name="todo" checked />
        <label for={props.id}>{props.item}</label>
      </>
    );
  } else if (props.completed === false) {
    return (
      <>
        <input type="checkbox" id={props.id} name="todo" />
        <label for={props.id}>{props.item}</label>
      </>
    );
  }
};

export default TodoDisplay;

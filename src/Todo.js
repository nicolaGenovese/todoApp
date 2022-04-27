import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";




function Todo({ id }) {
  const todo = useSelector(state => state.firebase.data.todos[id]);
  const firebase = useFirebase();

  function toggleDone() {
    firebase.update(`todos/${id}`, { done: !todo.done });
  }
  function deleteTodo() {
    return firebase.remove(`todos/${id}`);
  }

  return (
    <li className="Todo" >
      <label className="switch">
      <input
        className="Todo-Input"
        type="checkbox"
        checked={todo.done}
        onChange={toggleDone}
      />
      <span className="slider"></span>
      </label>
      
      <p className= "todoText">{todo.text || todo.name}</p>
      <button className="Todo-Button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  );
}

Todo.propTypes = {
  id: PropTypes.string.isRequired
};

export default Todo;

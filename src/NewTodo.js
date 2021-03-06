import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import './App.css';

function NewTodo() {
  const [inputVal, changeInput] = useState("");
  const firebase = useFirebase();

  function resetInput() {
    changeInput("");
  }
  function onInputChange(e) {
    return changeInput(e && e.target && e.target.value);
  }
  function addTodo() {
    return firebase.push("todos", { text: inputVal || "sample", done: false });
  }

  return (
    <div>
      <h4 className="nicola">New Todo</h4>
      <input value={inputVal} onChange={onInputChange} /><br></br><br></br>
      <button onClick={addTodo}>Add</button> {'      '}
      <button onClick={resetInput}>Cancel</button>
    </div>
  );
}

export default NewTodo;

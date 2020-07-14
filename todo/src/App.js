import React, { useState, useReducer } from "react";
import { reducer, initialList } from "./reducers/todoReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialList);
  const [newToDoText, setNewToDoText] = useState("Add to-dos here");
  console.log(state);

  const handleChanges = (event) => {
    setNewToDoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newToDoText });
  };

  const toggleToDo = (event, id) => {
    event.preventDefault();
    console.log(event.target.value);
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
    console.log(state);
  };

  return (
    <div className="App">
      <h1>hello world</h1>
      <div className="todo-container">
        {state.todos.map((item) => (
          <li
            key={item.item}
            onClick={() =>
              dispatch({ type: "TOGGLE_COMPLETED", payload: item.id })
            }
            style={{ textDecoration: item.completed ? "line-through" : "" }}
          >
            {item.item}
          </li>
        ))}
      </div>
      <div className="form-container">
        <form>
          <input
            type="text"
            name="newToDo"
            value={newToDoText}
            onChange={handleChanges}
          ></input>
          <button onClick={handleSubmit}>Add To Do</button>
          <button onClick={handleSubmit}>Clear Completed</button>
        </form>
      </div>
    </div>
  );
}

export default App;

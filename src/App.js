
import React, { useState } from "react";
import "./App.css";
import Todotable from "./components/TodoTable";

function App() {
  const [todo, setToDo] = useState({ description: "", date: "" });
  const [todos, setToDos] = useState([]);

  const addToDo = (event) => {
    event.preventDefault();
    setToDos([...todos, todo]);
  };

  const inputChanged = (event) => {
    setToDo({ ...todo, [event.target.name]: event.target.value });
  };


  
  return (
    <div className="table">
      <div className="todoHeader">
        <br></br>
        <h3 id="hthree">Add todo:</h3>
      </div>
      <form onSubmit={addToDo}>
        <label>
          Description:
            <input
            type="text"
            name="description"
            value={todo.description}
            onChange={inputChanged}
          />
        </label>
        <label>
          Date:
            <input
            type="date"
            name="date"
            value={todo.date}
            onChange={inputChanged}
          />
        </label>
        <input type="submit" value="Add" />
      </form>

      <Todotable todos={todos} setToDos={setToDos} />
    </div>

  );
}

export default App;

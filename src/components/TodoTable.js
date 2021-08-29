import React, { useState } from 'react';

export default function TodoList(props) {

  const deleteToDo = (index) => {
    const newListToDo = props.todos.filter((todo, i) => i !== index);
    return props.setToDos([...newListToDo]);
  }

  return (
    <div className="App">
      <br />
      <table className="DescDate">
        <tbody>
          <tr>
            <td id="date">Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td id="desc">Description</td>
          </tr>
        </tbody>
      </table>
      <div>
        <table >
          <tbody>
            {props.todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.description}
                </td>
                <td> <button onClick={e => deleteToDo(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

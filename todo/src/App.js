import React, { useState, useReducer } from "react";
import "./App.css";
import { TodoReducer, initialState } from "./reducers/todoReducer";
import Todo from "./components/List";
import styled from "styled-components";

const Title = styled.h1 `
Color: Gold;
`;

function App() {
  const [{ todos }, dispatch] = useReducer(TodoReducer, initialState);

  const handleToggle = (index) => {
    dispatch({ type: "TOGGLE-TODO", index });
    console.log(index);
  };

  return (
    <div className="App">
      <Title>Reducer Todo</Title>
      <Todo dispatch={dispatch} />
      {todos.map((task, index) => (
        <div
          key={index}
          onClick={() => handleToggle(index)}
          style={{
            margin: "0 auto",
            width: "20%",
            background: "blue",
            color: "gold"
          }}
        >
          <h3 style={{ color: task.completed ? "red" : "" }} >
            {task.item}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default App;

import React, { useState } from "react";

const Todo = ({ dispatch }) => {
  const [item, setItem] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD-TODO", item });
    setItem([]);
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR-COMPLETE" });
  };

  return (
    <div>
      <button onClick={handleClear}>Clear Completed</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        <button type="submit">Submit Todo</button>
      </form>
    </div>
  );
};

export default Todo;

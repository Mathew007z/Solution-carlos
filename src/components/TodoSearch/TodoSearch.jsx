import React from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
  return (
    <input
      className="TodoSearch"
      placeholder="Escribe tu tarea"
      onChange={(event) => console.log(event.target.value)}
    />
  );
};

export default TodoSearch;

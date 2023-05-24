import React from "react";
import TodoItem from './components/TodoItem/TodoItem' 
import TodoCounter from './components/TodoItem/TodoItem' 
import TodoList from './components/TodoItem/TodoItem' 
import CreateTodoButton from './components/TodoItem/TodoItem' 
import TodoSearch from './components/TodoItem/TodoItem' 





const defaultTodos = [
  { text: "Escribe una tarea1", completed: true },
  { text: "Escribe una tarea2", completed: false },
  { text: "Escribe una tarea3", completed: true },
];

const App = () => {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((item) => (
          <TodoItem
            key={item.text}
            text={item.text}
            completed={item.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
};

export default App;

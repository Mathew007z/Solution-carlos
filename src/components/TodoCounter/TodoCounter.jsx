import "./TodoCounter.css";

const TodoCounter = ({ total, completed }) => {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> tareas de <span>{total} </span>
      toDO's
    </h1>
  );
};

export default TodoCounter;

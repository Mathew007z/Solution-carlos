import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  return (
    <button
      className="CreateTodoButton"
      onClick={(e) => {
        console.log(e.target.value)}}>
    </button>
  );
};

export default CreateTodoButton;

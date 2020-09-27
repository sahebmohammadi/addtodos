import React from "react";
import "./styles.css";
const Todo = (props) => {
  const { text, onDelete, onComplete, todo } = props;

  let completeClass = "btn btn-secondary";
  if (todo.completed) {
    completeClass += " completedclass";
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ?" completed": ""}`}>{text}</li>

      <button onClick={onComplete} className="complete-btn">
        complete
      </button>

      <button onClick={onDelete} className="delete-btn">
        delete
      </button>
    </div>
  );
};
export default Todo;

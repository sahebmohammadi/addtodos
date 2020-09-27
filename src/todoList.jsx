import React from "react";
// Importing components
import Todo from "./todo";

const TodoList = ({ setTodos, todos, filteredTodos }) => {
  //  Handlers
  const deleteTodoHandler = (id) => {
    // console.log(id);
    setTodos(todos.filter((el) => el.id !== id));
  };
  const completeHandeler = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo-container">
      <ul className = "todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            text={todo.text}
            onDelete={() => deleteTodoHandler(todo.id)}
            onComplete={() => completeHandeler(todo)}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;

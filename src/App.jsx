import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Importing Components
import Form from "./form";
import TodoList from "./todoList";
// Importing Logo
import log from "./logo/todo.jpg";

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Rerender the app when status and todos changed
  useEffect(() => {
    filterHnadler();
  }, [status, todos]);

  // Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Handlers
  const filterHnadler = () => {
    switch (status) {
      default:
        setFilteredTodos(todos);
        break;
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
    }
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    // console.log(e.target.value)
  };
  const submitTodosHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    // console.log(todos);
    setInputText("");
  };

   //Save to local storage
   const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  };

  // Get from local storage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  };
  return (
    <div className="App">
      <img src = {log} />
      <header>
        <h1>TodoList {inputText}</h1>
      </header>
      <Form
        value={inputText}
        textChange={inputTextHandler}
        submitTodos={submitTodosHandler}
        setStatus={setStatus}
      />

      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}
export default App;

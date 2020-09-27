import React, { useState , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./form";
import TodoList from "./todoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

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

  // use effect
  useEffect(()=>{
    // console.log("daaar")
    filterHnadler()
  },[status,todos]);

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
  return (
    <div className="App">
      <header>
        <h1>TodoList {inputText}</h1>
      </header>
      <Form
        value={inputText}
        textChange={inputTextHandler}
        submitTodos={submitTodosHandler}
        setStatus={setStatus}
      />

      <TodoList filteredTodos = {filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}
export default App;

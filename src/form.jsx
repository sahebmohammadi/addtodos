import React from "react";

const Form = (props) => {
  // props
  const { submitTodos, textChange, value, setStatus } = props;

  // Handlers
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <form>
        <div className="input">
          <input
            className="todo-input"
            type="text"
            onChange={textChange}
            value={value}
            placeholder="Add yout Todo"
          />
          <button className="todo-button" onClick={submitTodos} type="submit">
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <div className="select">
          <select
            onChange={statusHandler}
            name="todos"
          >
            <option value="all">all</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Form;

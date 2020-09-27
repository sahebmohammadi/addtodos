import React from "react";

const Form = (props) => {
  const { submitTodos, textChange, value ,setStatus} = props;
  const statusHandler = (e)=>{
    setStatus(e.target.value);
  }
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            className="form-control"
            type="text"
            onChange={textChange}
            value={value}
          />
        </div>
        <div className="col">
          <button
            className="btn btn-primary mb-2"
            onClick={submitTodos}
            type="submit"
          >
            submit
          </button>
        </div>
        <div className="col">
          <div className="select">
            <select
              onChange={statusHandler}
              className="form-control"
              name="todos"
            >
              <option value="all">all</option>
              <option value="completed">completed</option>
              <option value="uncompleted">uncompleted</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

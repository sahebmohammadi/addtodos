import React from "react";
import "./styles.css";
const Todo = (props) => {

const {text, onDelete, onComplete,todo} = props;

let completeClass = "btn btn-secondary";
if(todo.completed){
completeClass += " completedclass";
}

  return (
    <div className="row mt-2">
      <div className="col-5">
        <li className="list-group-item">{text}</li>
      </div>
      <div className="col">
        <button 
         onClick = {onComplete}
        className={completeClass}>complete</button>
      </div>
      <div className="col">
        <button onClick = {onDelete} className="btn  btn-warning">delete</button>
      </div>
    </div>
  );
};
export default Todo;

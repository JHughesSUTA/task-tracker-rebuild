import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({ text, onDelete, task }) {
  return (
    <div className="task">
      <h3>
        {text} <FaTimes style={{color:"red",cursor:"pointer"}} onClick={() => onDelete(task.id)}/>
      </h3>
    </div>
  );
}

export default Task;

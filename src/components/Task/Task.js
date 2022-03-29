import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({ text, onDelete, task, setReminder }) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => setReminder(task.id)}>
      <h3>
        {text} <FaTimes style={{color:"red",cursor:"pointer"}} onClick={() => onDelete(task.id)}/>
      </h3>
    </div>
  );
}

export default Task;

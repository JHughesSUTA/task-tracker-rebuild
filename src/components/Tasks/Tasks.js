import React from 'react'
import Task from '../Task/Task';

function Tasks({tasks, onDelete}) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task key={task.id} text={task.text} onDelete={onDelete} task={task} />
      ))}
    </div>
  );
}

export default Tasks
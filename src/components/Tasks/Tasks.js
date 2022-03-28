import React from 'react'
import Task from '../Task/Task';

function Tasks({tasks}) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task key={task.id} text={task.text} />
      ))}
    </div>
  );
}

export default Tasks
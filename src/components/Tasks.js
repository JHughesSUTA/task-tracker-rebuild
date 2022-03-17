import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
  return(
    <div className="tasks" >
      {tasks.map(task => (
        <Task key={task.id} task={task} text={task.text} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default Tasks
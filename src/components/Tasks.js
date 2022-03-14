import Task from './Task'

const Tasks = ({tasks, deleteTask, toggleReminder}) => {
  return(
    <div className="tasks" >
      {tasks.map(task => (
        <Task key={task.id} text={task.text} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder} />
      ))}
    </div>
  )
}

export default Tasks
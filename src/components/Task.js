import { FaTimes } from 'react-icons/fa'

const Task = ({text, deleteTask, task}) => {
  const onDelete = (id) => {
    deleteTask(id)
  }

  const toggleReminder = (id) => {
    console.log(id)
  }

  return(
    <div className="task" onDoubleClick={() => toggleReminder(task.id)}>
      <h3>{text} <FaTimes style={{color:'red', pointer:'cursor'}} onClick={() => onDelete(task.id)} /></h3>
    </div>
  )
}

export default Task
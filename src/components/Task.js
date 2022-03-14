import { FaTimes } from 'react-icons/fa'

const Task = ({ text, deleteTask, task, toggleReminder }) => {

  return(
    <div className="task" onDoubleClick={() => toggleReminder(task.id)}>
      <h3>{text} <FaTimes style={{color:'red', pointer:'cursor'}} onClick={() => deleteTask(task.id)} /></h3>
    </div>
  )
}

export default Task
import { FaTimes } from 'react-icons/fa'

const Task = ({onDelete, task, onToggle}) => {
  return(
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} <FaTimes style={{color:'red', pointer:'cursor'}} onClick={() => onDelete(task.id)} /></h3>
    </div>
  )
}

export default Task
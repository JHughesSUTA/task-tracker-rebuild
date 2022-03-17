import { FaTimes } from 'react-icons/fa'

const Task = ({onDelete, task}) => {
  return(
    <div className="task">
      <h3>{task.text} <FaTimes style={{color:'red', pointer:'cursor'}} onClick={() => onDelete(task.id)} /></h3>
    </div>
  )
}

export default Task
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete}) => {
  return(
    <div className="task">
      <h3>{task.text} <FaTimes style={{color:'red', pointer:'cursor'}} onClick={() => onDelete(task.id)} /></h3>
      
    </div>
  )
}

export default Task
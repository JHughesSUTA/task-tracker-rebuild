import { FaTimes } from 'react-icons/fa'

const Task = ({text}) => {
  return(
    <div className="task">
      <h3>{text} <FaTimes style={{color:'red', pointer:'cursor'}}/></h3>
      
    </div>
  )
}

export default Task
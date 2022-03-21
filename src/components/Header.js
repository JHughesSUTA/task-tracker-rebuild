import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, showAddTask, toggleShowAddTask}) => {
  const location = useLocation()
  console.log(location)

  return(
    <div className='header' >
      <h1>{title}</h1>
      {location.pathname === "/" && <Button 
        text={showAddTask ? 'Close' : 'Add' }
        color={showAddTask ? 'red' : 'green' }
        onClick={toggleShowAddTask}
      />}
    </div>
  )
}

Header.defaultProps = {
  title: 'TITLE'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
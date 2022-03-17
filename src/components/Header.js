import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, showAddTask, toggleShowAddTask}) => {
  return(
    <div className='header' >
      <h1>{title}</h1>
      <Button 
        text={showAddTask ? 'Close' : 'Add' }
        color={showAddTask ? 'red' : 'green' }
        onClick={toggleShowAddTask}
      />
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
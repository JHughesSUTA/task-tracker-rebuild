import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, toggleShowAdd, showAddTask}) => {

  return(
    <div className='header' >
      <h1>{title}</h1>
      <Button 
        text={showAddTask ? 'close' : 'show'}
        color={showAddTask ? 'red' : 'green'}
        onClick={toggleShowAdd}
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
import PropTypes  from 'prop-types'

const Button = ({ color, text, toggleAddTask }) => {
  return(
    <button className="btn" style={{backgroundColor: color}} onClick={toggleAddTask} >{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

Button.defaultProps = {
  color: 'blue'
}

export default Button
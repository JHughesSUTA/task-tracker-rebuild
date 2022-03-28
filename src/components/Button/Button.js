import { PropTypes } from "prop-types"

function Button({ text, color, handleClick }) {
  return (
    <button className="btn" style={{backgroundColor: color}} onClick={handleClick} >{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Button
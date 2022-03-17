import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  return(
    <div className='header' >
      <h1>{props.title}</h1>
      <Button text="Add" color="black" />
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
import PropTypes from 'prop-types'
import Button from './Button'
import { useState } from 'react'

const Header = ({title, toggleAddTask, showAddTask}) => {
  // const [buttonColor, setButtonColor] = 'black'
  // const [buttonText, setButtonText] = 'button'

  return(
    <div className='header' >
      <h1>{title}</h1>
      <Button text={showAddTask ? 'CLOSE' : 'ADD'} color={showAddTask ? 'red' : 'green'} toggleAddTask={toggleAddTask}/>
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
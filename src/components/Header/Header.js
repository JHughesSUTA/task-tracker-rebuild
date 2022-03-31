import { useLocation } from 'react-router-dom'
import PropTypes from "prop-types";
import Button from "../Button/Button";

function Header({ title, toggleShowAddTask, showAddTask }) {
  const location = useLocation()
  return (
    <div className="header">
      <h1>{title}</h1>
      { 
      location.pathname === "/" && 
        <Button 
          text={showAddTask ? "Close" : "Add"}
          color={showAddTask ? "red" : "green"}
          handleClick={toggleShowAddTask}
        />
      }
    </div>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}


export default Header;

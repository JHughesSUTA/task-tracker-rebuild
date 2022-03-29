import PropTypes from "prop-types";
import Button from "../Button/Button";

function Header({ title, toggleShowAddTask, showAddTask }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button 
        text={showAddTask ? "Close" : "Add"}
        color={showAddTask ? "red" : "green"}
        handleClick={toggleShowAddTask}
      />
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

import PropTypes from "prop-types";
import Button from "../Button/Button";

function Header({ title, handleClick }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button text={"Add"} color="green" handleClick={handleClick}/>
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

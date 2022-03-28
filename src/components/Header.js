function Header({ title }) {
  return (
    <div>{title}</div>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

export default Header;

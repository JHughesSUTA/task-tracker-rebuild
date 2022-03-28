import React from 'react'

function Task({text}) {
  return (
    <div className="task">
      <h3>{text}</h3>
    </div>
  )
}

export default Task
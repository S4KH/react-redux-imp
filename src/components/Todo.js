import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <div>
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        fontSize: '20px'
      }}
    >
      {text}
    </li>
    <hr/>
  </div>
)

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

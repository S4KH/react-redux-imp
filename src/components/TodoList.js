import React, { PropTypes, Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {


  render() {
    const { todos, onTodoClick } = this.props
    return (
      <ol>
        {
            todos.map(todo =>
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
              />
            )
        }
      </ol>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList

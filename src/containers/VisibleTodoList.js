import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return null
  }
}

function select(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

function actions(dispatch) {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}


module.exports = connect(select, actions)(TodoList)

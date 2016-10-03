import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="row col-md-12">
    <div className="col-sm-4">
      <h3>Add todo</h3>
      <AddTodo />
    </div>
    <div className="col-sm-6">
      <h3>Todo List</h3>
      <VisibleTodoList />
    </div>
    <div className="col-sm-2">
      <h3>Filters</h3>
      <Footer />
    </div>
  </div>
)

export default App

import React from 'react'

export default ({ text, todo, setTodos, todos }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id))
  }
  const completHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item, comleted: !item.comleted
        }
      }
      return item
    }))
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.comleted ? "completed" : ""}`}>{text}</li>
      <button onClick={completHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}
import React from 'react'

export default ({inputText, setInputText, todos, setTodos}) => {
  const inputTextHandler = (event) => {
    setInputText(event.target.value)
  }
  const submitTodoHandler = (event) => {
    event.preventDefault()
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
    ])
  }
  return(
    <form> 
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}
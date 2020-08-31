import React, { useState, useEffect } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  // State stuff
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  // RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos()
  }, [])
  // UseEffect
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])
  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(item => item.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(item => item.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todoss', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;

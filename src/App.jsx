import './App.css'
import Container from './components/container/container'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    if (inputValue.trim() === '') return
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }
    setTasks([...tasks, newTask])
    setInputValue('')
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    }))
  }

  return (
    <>
      <Container 
        tasks={tasks}
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </>
  )
}

export default App
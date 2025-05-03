import './App.css';
import Container from './components/container/container';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editText, setEditText] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (editText.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: editText,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setEditText('');
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEditing = (task) => {
    setEditTaskId(task.id);
    setEditText(task.text);
  };

  const saveEdit = () => {
    setTasks(prev => prev.map(task =>
      task.id === editTaskId ? { ...task, text: editText } : task
    ));
    setEditTaskId(null);
    setEditText('');
  };

  const filteredTasks = () => {
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    } else if (filter === 'inCompleted') {
      return tasks.filter(task => !task.completed);
    }
    return tasks;
  }

  return (
    <Container
      tasks={filteredTasks()}
      addTask={addTask}
      deleteTask={deleteTask}
      toggleTask={toggleTask}
      editTaskId={editTaskId}
      editText={editText}
      setEditText={setEditText}
      startEditing={startEditing}
      saveEdit={saveEdit}
      setFilter={setFilter}
    />
  );
}

export default App;
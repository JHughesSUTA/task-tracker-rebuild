import './index.css'
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks';
import AddTask from './components/AddTask/AddTask';

function App(){
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8000/tasks");
    const data = await res.json()
    return data
  }

  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 5000) + 1
    newTask = { id: id, ...newTask }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const setReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
      <div className="container">
        <Header toggleShowAddTask={toggleShowAddTask} showAddTask={showAddTask} />
        {showAddTask && <AddTask addTask={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} setReminder={setReminder} /> : <p>There are no tasks left</p>}
      </div>
  );
}

export default App;
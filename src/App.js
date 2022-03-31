import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks';
import AddTask from './components/AddTask/AddTask';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

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

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8000/tasks")
    const data = await res.json()
    return data
  }

  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  const addTask = async (newTask) => {
    // const id = Math.floor(Math.random() * 5000) + 1
    const res = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newTask),
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE"
    })
    setTasks(tasks.filter(task => task.id !== id))
  }

  const setReminder = async (id) => {
    const reminderToToggle = await fetchTask(id)
    const updatedReminder = { ...reminderToToggle, reminder: !reminderToToggle.reminder }

    const res  = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedReminder) 
    })

    const data = await res.json()

    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header
          toggleShowAddTask={toggleShowAddTask}
          showAddTask={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask addTask={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    setReminder={setReminder}
                  />
                ) : (
                  <p>There are no tasks left</p>
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
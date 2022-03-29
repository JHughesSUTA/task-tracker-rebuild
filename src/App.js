import './index.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks';
import AddTask from './components/AddTask/AddTask';

function App(){
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30 pm",
      reminder: true,
    },
  ]);

  const handleClick = () => {
    console.log("clickity click")
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const setReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
      <div className="container">
        <Header handleClick={handleClick} />
        <AddTask />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} setReminder={setReminder} /> : <p>There are no tasks left</p>}
      </div>
  );
}

export default App;
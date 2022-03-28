import './index.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks';

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

  return (
      <div className="container">
        <Header handleClick={handleClick} />
        <Tasks tasks={tasks} />
      </div>
  );
}

export default App;
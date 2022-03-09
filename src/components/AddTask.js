import { useState } from 'react'

const AddTask = ({onAdd, handleDelete}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)


  const onSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')

    if (!text) {
      alert('PLEASE ENTER A TASK')
      return
    }

    handleDelete({text, day, reminder})

    try{
      setText('')
      setDay('')
      setReminder(false)
    } catch(error) {
      console.log(error)
    }
    
  }

  return(
    <form onSubmit={onSubmit} >
      <div className="form-control">
        <label>Task</label>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        <input type="text" value={day} onChange={e => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" className="checkbox" checked={reminder} onChange={e => setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" value="save text" className="btn btn-block" />
    </form>
  )
}

export default AddTask
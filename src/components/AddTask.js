import { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please Enter Text')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return(
    <form onSubmit={onSubmit}>
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
        <input type="checkbox" checked={reminder} className="checkbox" onChange={e => setReminder(e.currentTarget.checked)}/>
      </div>
      <input type="submit" value="save task" className="btn btn-block" />
    </form>
  )
}

export default AddTask
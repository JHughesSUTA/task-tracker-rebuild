import { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    
    const newTask = {text, day, reminder}
    onAdd(newTask)

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className="form-control">
        <label>Text</label>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input type="text" value={day} onChange={e => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input type="checkbox" checked={reminder} onChange={e => setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" value="SAVE" className="btn btn-block" />
    </form>
  )
}

export default AddTask
function AddTask() {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Text</label>        
        <input type="text" placeholder={"add text"} />
      </div>
      <div className="form-control">
        <label>Day</label>        
        <input type="text" placeholder={"add day"} />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>
      <input type="submit" className="btn btn-block" />
    </form>
  )
}

export default AddTask
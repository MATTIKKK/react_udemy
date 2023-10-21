import React, { useState } from 'react'


const TaskEdit = ({task, onEdit, onSubmit}) => {
  const [title, setTitle] = useState(task.title)

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(task.id, title);
    onSubmit(); 
  }

  return (
    <div>
      <form className="task-edit">
        <label>Title</label>
        <input className="input" type="text" value={title} onChange={handleChange}/>
        <button className="button is-primary" onClick={handleSubmit}>Save</button>
      </form>
    </div>
  )
}

export default TaskEdit
import React, { useState } from 'react'
import TaskEdit from './TaskEdit'

const TaskShow = ({task, onEdit, onDelete}) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  }

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  }

  let context = task.title;
  if(showEdit){
    context = <TaskEdit task={task} onEdit={onEdit} onSubmit={handleShowEdit}/>
  }

  return (
    <div className="task-show">
      {context}
      <div className="actions">
        <button className="edit" onClick={handleShowEdit}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default TaskShow
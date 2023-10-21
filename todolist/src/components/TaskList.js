import React from 'react'
import TaskShow from './TaskShow'

const TaskList = ({tasks, onEdit, onDelete}) => {
  const renderedTasks = tasks.map((task) => {
    return <TaskShow key={task.id} task={task} onDelete={onDelete} onEdit={onEdit}/>
  
  });

  return (
    <div className="task-list">
        
        {renderedTasks}
    </div>
  )
}

export default TaskList
import React, { useState } from 'react'
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const handleCreate = (title) => {
        const updatedTasks = [
            ...tasks,
            {id: Math.round(Math.random() * 9999), title}
        ]

        setTasks(updatedTasks);
    }

    const handleEdit = (id, title) => {
        const updatedTasks = tasks.map((task) => {
            if(task.id === id){
                return {...task, title};
            }
            return task;
        });

        setTasks(updatedTasks);
    }

    const handleDelete = (id) => {
        const updatedTasks = tasks.filter((task) => {
            return task.id !== id;
        });

        setTasks(updatedTasks);
    }

    return (
        <div className="app">
            <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete}/>
            <TaskCreate onCreate={handleCreate} />
        </div>
    )
}

export default App
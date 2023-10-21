import React, { useState } from 'react'

const TaskCreate = ({ onCreate }) => {
    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title);
        setTitle("");
    }

    return (
        <div className='task-create'>
            <h3>Add a task</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" type="text" value={title} onChange={handleChange}/>
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default TaskCreate
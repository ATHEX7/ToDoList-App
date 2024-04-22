import React, { useState } from 'react'

export default function ToDoList() {
    const [tasks, setTasks] = useState(["Walk a dog", "Do exercise", "Go to college"]);
    const [newTask, setnewTask] = useState("");

    function inputChange(event) {
        setnewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setnewTask("");
        }

    }
    function deleteTask(index) {
        const remove = tasks.filter((_, i) => i !== index)
        setTasks(remove);


    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }

    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder='Enter a Task'
                    value={newTask}
                    onChange={inputChange} />
                <button className="add-button" onClick={addTask}>
                    Add task

                </button>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className='text'>{task}</span>
                            <button className="del-button" onClick={() => deleteTask(index)}>
                                Delete Task
                            </button>
                            <button className="move-button" onClick={() => moveTaskUp(index)}>
                                👆
                            </button>
                            <button className="move-button" onClick={() => moveTaskDown(index)}>
                                👇
                            </button>
                        </li>

                    )}

                </ol>
            </div>
        </div>
    )
}

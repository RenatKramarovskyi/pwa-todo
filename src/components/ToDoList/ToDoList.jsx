import React, { useState } from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";
import cl from './ToDoList.module.css'


const ToDoList = ({tasks, setTasks}) => {
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className={cl.todoList}>
            {tasks.map(task => (
                <ToDoItem
                    key={task.id}
                    data={task}
                    onRemove={() => removeTask(task.id)}
                />
            ))}
        </div>
    );
};

export default ToDoList;

import React from 'react';
import cl from './ToDoItem.module.css';
import PrettyButton from "../UI/PrettyButton/PrettyButton";

const ToDoItem = ({ data, onRemove }) => {
    return (
        <div className={cl.todoBlock}>
            <div className={cl.todoInfo}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <span>{data.time}</span>
            </div>
            <div className={cl.removeButton}>
                <div>
                    <PrettyButton
                        isNegative={true}
                        onClick={onRemove}>remove</PrettyButton>
                </div>
            </div>
        </div>
    );
};

export default ToDoItem;

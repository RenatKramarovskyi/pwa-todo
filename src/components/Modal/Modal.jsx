import React, { useState } from 'react';
import cl from './Modal.module.css';
import PrettyInput from "../UI/PrettyInput/PrettyInput";
import PrettyButton from "../UI/PrettyButton/PrettyButton";

const Modal = ({ isOpen, setIsOpen, modalHeader, tasks, setTasks }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');

    function createTodo() {
        if (!title || !description || !time) return;
        setTasks([...tasks, {
            id: Date.now(),
            title: title,
            description: description,
            time: time
        }]);
        setIsOpen(false);
    }

    return (
        <div className={isOpen ? cl.overlay : cl.disable} onClick={() => setIsOpen(false)}>
            <div className={cl.modal} onClick={event => event.stopPropagation()}>
                <div className={cl.modalHeader}>
                    <div style={{ userSelect: "none" }}>{modalHeader}</div>
                    <div className={cl.closeButton} onClick={() => setIsOpen(false)}>X</div>
                </div>
                <div className={cl.getInfoBlock}>
                    <PrettyInput
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <PrettyInput
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <PrettyInput
                        placeholder="Time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <div className={cl.centerButton}>
                        <PrettyButton onClick={createTodo}>
                            CONFIRM
                        </PrettyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

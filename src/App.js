
import './App.css';
import PrettyButton from "./components/UI/PrettyButton/PrettyButton";
import Modal from "./components/Modal/Modal";
import {useEffect, useState} from "react";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import ToDoList from "./components/ToDoList/ToDoList";
import {logDOM} from "@testing-library/react";

function App() {

    const [isOpen, setIsOpen] = useState(false);
    const [tasks, setTasks] = useState([ ]);
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {

        fetch('https://66c9e4ae59f4350f064dc92e.mockapi.io/todo/todoItem')
            .then(response => response.json())
            .then(data => {
                setTasks(data)
                setIsFetching(false)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsFetching(false)
            });

    }, []);




    return (
      <div className="App">
        <div className={"flexAndCenter"}>
            <div className={"limit_button"}>
                <PrettyButton onClick={() => setIsOpen(true)}>add new todo</PrettyButton>
            </div>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalHeader={"ADD TODO"}
                tasks={tasks}
                setTasks={setTasks}
                />

            <div className={"todoArea"}>
                {isFetching
                    ? <div>Fetching data, please wait...</div>
                    : <ToDoList tasks={tasks} setTasks={setTasks}/>
                }

            </div>
        </div>
      </div>
    );
}

export default App;

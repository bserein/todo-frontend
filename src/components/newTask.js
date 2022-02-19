import {Input, Button } from "antd";
import { useState } from "react";



export default function NewTask(){
    const [newTask, setNewTask] = useState(""); //you need a usestate to hold onto the value when you add a task

    const taskObject = {
        task: newTask
    }

    const handleButtonSubmit = () => {
        console.log('sending to API')
        fetch("https://much-todo-bas.uc.r.appspot.com/tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskObject),
        })
        .then(response => response.json())
        .then(data => setNewTask(data))
        // .then(data => console.log('data was added:', data))
        .catch(err => console.error(err))
    } 

    const handleInputText = event => {
        setNewTask(event.target.value)
    }

    console.log('newTask state here ->>', newTask)


    return (
        <>
        <h2>Add new task</h2>
        <Input.Group compact> 
        {/* this is a sub component that styles the button */}
        <Input placeholder="Enter Task Here"
        onChange={(event) => handleInputText(event)}
        style={{width: "calc(100% - 100px)"}}
        />
       <Button type="primary"
        onClick={handleButtonSubmit}
       >Submit</Button>
       </Input.Group>
       </>
     )
}
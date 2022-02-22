import { Input, Button } from "antd";
import { useState } from "react";

export default function NewTask({ setTasks, setLoading }) {
  //we now have the setTasks in Main and dropping it down to new Tasks
  const [newTask, setNewTask] = useState(""); //you need a usestate to hold onto the value when you add a task

  const handleButtonSubmit = () => {
      if (newTask.trim() === ''){ //if the task is empty
          return //it will return nothing 
      } //if it isnt empty then do everything else
    const taskObject = {
      task: newTask,
    };
    setLoading(true);
    console.log("sending to API");
    fetch("https://much-todo-bas.uc.r.appspot.com/tasks", {
      //gets the data from the database
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObject), // it makes a string and puts it in proper JSON so {task: something} --> {"task": "something"}
    })
      // .then(data => setNewTasks(data)) // we no longer need it because with the setTasks it will update the list
      .then(() => {
        //now we update the list whenever we add a new task
        setNewTask("");
        fetch("https://much-todo-bas.uc.r.appspot.com/tasks")
          .then((response) => response.json())
          .then((data) => {
            setTasks(data);
            setLoading(false);
          })
          .then((data) => console.log("data was added:", data)); //so we can make sure we know what data is being added
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };

  const handleInputText = (event) => {
    setNewTask(event.target.value);
  };

  console.log("newTask state here ->>", newTask);

  return (
    <>
      {/* <Input.Group compact> */}
        {/* this is a sub component that styles the button */}
        <Input.Search
          placeholder="Enter Task Here"
          value={newTask}
          onChange={(event) => handleInputText(event)}
          enterButton="Add Task" 
        size="Large"
        onSearch={handleButtonSubmit}
          style={{ width: "calc(100% - 100px)" }}
        //   the order of these props dont matter 
        />
        {/* <Button type="primary" onClick={handleButtonSubmit}> //you no longer need this Button method and you can use the other one Search
          Submit
        </Button>
      </Input.Group> */}
      
    </>
  );
}

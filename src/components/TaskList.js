import { useState, useEffect } from "react";
import { List } from "antd";
import Task from "./Task";

// const fakeTasks = [
//     { id: 1, task: 'Buy Milk', done: false },
//     { id: 2, task: 'Buy Beer', done: false },
//     { id: 3, task: 'Buy Wine', done: true }, //this was just setting up tasks to see if it works
//     { id: 4, task: 'Buy Truly', done: false },
//     { id: 5, task: 'Buy Paper Towels', done: false },
// ]

export default function TaskList() {
  const [tasks, setTasks] = useState(); //you can now remove the fake tasks to check the database for any tasks

  useEffect(() => {
    //GET DATA FROM API
    fetch("https://much-todo-bas.uc.r.appspot.com/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data)) //you could also just say setTasks
      .catch(alert);
  }, []);

  //TASK HAS ALL THE DATA

  //WE NEED TO PASS THIS TASKS => DATA TO THE LIST COMPONENT
  return (
    <List
      bordered //bordered by itself a prop, is like saying bordered={true} so because its already true you can leave it as true
      dataSource={tasks}
      renderItem={(item) => <Task item={item} />}
    />
  );

  // return (
  //     <>
  //     <ul>
  //         {tasks && tasks.map(singleTask => {
  //             return (
  //                 <li>
  //                     {singleTask.id} - {singleTask.task} //another way of doing the list of elements, however this is ugly
  //                </li>
  //                  )
  //                 })}
  //     </ul>
  //     </>
  // )
}

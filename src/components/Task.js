import { useState, useEffect } from "react";
import { List } from "antd";

export default function Task({ item, setTasks }) {
    const [itemStyle, setItemStyle] = useState({});
    useEffect(() => {
        if (item.done) {
            setItemStyle({ color: 'grey', textDecoration: 'line-through' })
        } else {
            setItemStyle({ color: 'black', textDecoration: 'none'})
        }
    },[item]) //saying if the item changes, run the useEffect
    const handleToggleTaskDone = () => { //this function will mark if its completed or not by clicking on the task
        // call the api -- patch: `/task/${item.id}` send {done: !item:done} 
        fetch(`https://much-todo-bas.uc.r.appspot.com/tasks/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            // check if task is done or not and get task id
            body: JSON.stringify({done: !item.done}),
        })
        .then(() => {
            //update the whole list and let react find the difference/  then: fetch our tasks
            fetch('https://much-todo-bas.uc.r.appspot.com/tasks')
            .then(response => response.json())
            //  then:setTasks(data)
            .then((data) => setTasks(data))
        })
        .catch(alert)
    }
  return <List.Item  onClick={handleToggleTaskDone} style={itemStyle}>{item.task}</List.Item>; //has a built in component inside List and has a function to list the items// this is adding a style based if the item is done or not
}

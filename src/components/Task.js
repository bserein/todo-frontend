import { useState, useEffect } from "react";
import { List, Checkbox, Popconfirm, message, Button } from "antd";

export default function Task({ item, setTasks, setLoading }) {
    const [itemStyle, setItemStyle] = useState({});
    useEffect(() => {
        if (item.done) {
            setItemStyle({ 
                color: 'grey', 
                textDecoration: 'line-through',
                display: "flex",
                width: "auto",
            });
        } else {
            setItemStyle({ 
                color: 'black', 
                textDecoration: 'none',
                display: "flex",
                width: "auto",
            });
        }
    },[item]) //saying if the item changes, run the useEffect
    const handleToggleTaskDone = () => { //this function will mark if its completed or not by clicking on the task
        setLoading(true);
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
            .then(data => {
                setTasks(data);
                setLoading(false);
              });
        })
        .catch(err => {
            alert(err);
            setLoading(false);
        });
    }
    function cancel(event) {
        event.preventDefault();
        console.log(event);
        message.error("Canceled");
      }
    
      const handleDelete = (event) => {
        setLoading(true);
        event.preventDefault();
        fetch(`https://much-todo-bas.uc.r.appspot.com/tasks/${item.id}`, {
          method: "DELETE",
        })
          .then(() => {
            fetch("https://much-todo-bas.uc.r.appspot.com/tasks")
              .then(response => response.json())
              .then(data => {
                setTasks(data);
                setLoading(false);
              });
          })
          .catch((err) => {
            alert(err);
            setLoading(false);
          });
      };
      return (
        <>
          <List.Item style={itemStyle}>
            <Checkbox
              style={{ margin: "10px" }}
              onClick={handleToggleTaskDone}
              checked={item.done}
              //has a built in component inside List and has a function to list the items// this is adding a style based if the item is done or not
            ></Checkbox>
            {item.task}
            <Button
              type="dashed"
              style={{ alignSelf: "flex-end" }}
              danger
              //   onClick={handleDelete}
            >
              <Popconfirm
                title="Are you sure you want to delete this task?"
                onConfirm={handleDelete}
                onCancel={cancel}
              >
                Delete
              </Popconfirm>
            </Button>
          </List.Item>
        </>
      );
    }




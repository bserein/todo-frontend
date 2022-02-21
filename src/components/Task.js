import { useState, useEffect } from "react";
import { List } from "antd";

export default function Task({ item }) {
    const [itemStyle, setItemStyle] = useState({});
    useEffect(() => {
        if (item.done) {
            setItemStyle({ color: 'grey', textDecoration: 'line-through' })
        } else {
            setItemStyle({ color: 'black', textDecoration: 'none'})
        }
    },[item]) //saying if the item changes, run the useEffect
  return <List.Item style={itemStyle}>{item.task}</List.Item>; //has a built in component inside List and has a function to list the items// this is adding a style based if the item is done or not
}

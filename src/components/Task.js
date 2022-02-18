import { List } from "antd";

export default function Task({ item }) {
  return <List.Item>{item.task}</List.Item>; //has a built in component inside List and has a function to list the items
}

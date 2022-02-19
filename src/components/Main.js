import TaskList from "./TaskList"
import NewTask from "./newTask"
export default function Main(){
    return (
        <section>
            <h1>Much Todo</h1>
            <TaskList/>
            <NewTask />
        </section>
    )
}
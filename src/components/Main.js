import { useState } from "react"
import TaskList from "./TaskList"
import NewTask from "./newTask"


export default function Main(){
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState();
    return (
        <section style={{ background: 'white', padding: '0 40px 40px' }}>
            <TaskList tasks={tasks}
            setTasks={setTasks}
            loading={loading}
            setLoading={setLoading}/>
            <br />
            <NewTask setTasks={setTasks} setLoading={setLoading}/>
            {/* we are setting the usestates in newTask and TaskList and then dropping them in as props in the functions, destructuring them  */}
        </section>
    );
}
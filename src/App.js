import Header from './component/header'
import Tasks from './component/tasks'
import {useState} from "react";
import AddTask from './component/add'

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState(
        [
    {
        id : 1,
        text : "Project Meeting",
        on : "11.03.2023 15:30:00",
        reminder: true
    },
    {
        id : 2,
        text : "Report Completion",
        on : "12.03.2023 09:00:00",
        reminder: false
    },
    {
        id : 3,
        text : "Meeting with project lead",
        on : "12.03.2023 14:15:00",
        reminder: true
    }
    ])

    // To add the Task
    const addTask = (task) => {
        const id = Math.floor(Math.random()*1000) +1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    // To delete the Task
    const deleteTask = (id) => {
        setTasks( tasks.filter((task) => task.id !== id))
    }

    // Toggling reminder
    const reminderToggling = (id) => {
        setTasks( tasks.map(
            (task) => task.id === id ? {
                ...task, reminder: !task.reminder
                } : task))
    }

  return (
    <div className='container'>
        <Header title={'Task Tracker'} onAdd ={()=> setShowAddTask(!showAddTask)} showAddTask = {showAddTask}/>
        {
            tasks.length > 0 ?
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {reminderToggling}/>
                : 'No Task available'
        }
        {showAddTask && <AddTask onAdd={addTask}/>}
    </div>
  );
}

export default App;

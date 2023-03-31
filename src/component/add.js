import {useState} from 'react'
const AddTask = ({ onAdd }) => {
    const [title, setTask] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!title) {
            alert('Please enter a task')
            return
        }
        onAdd({title, date, reminder})

        onClear(e)
    }

    const onClear = (e) => {
        setTask('')
        setDate('')
        setReminder(false)

    }

    return (
        <form className= 'add-form' onSubmit={ onSubmit }>
            <br/>
            <h3>New Task</h3>
            <div className = 'form-control'>
                <label> Task </label>
                <input type="text" placeholder='Add Task detail'
                       value={title}
                       onChange={(e) => setTask(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <label> Date and Time </label>
                <input type="text" placeholder='dd:mm:yy hh:mm'
                       value={date} onChange={(e)=> setDate(e.target.value)}/>
            </div>
            <div className = 'form-control form-control-check'>
                <label> Set Reminder </label>
                <input type="checkbox"
                value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit'  className='btn btn-block' value='Save Task'/>
        </form>
    )
}

export default AddTask
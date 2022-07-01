import React, { useEffect, useState } from 'react';
import Task from './Task';



const Tasks = () => {

    const [tasks, setTasks] = useState([])
    const [reload, SetreLoad] = useState(false)

    useEffect(() => {
        fetch('https://hidden-dusk-99442.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            })

    }, [reload])




    const handleUpdate = async e => {
        e.preventDefault();

        const taskDes = e.target.taskDetails.value;
        const taskID = e.target.id.value;

        // return
        fetch(`https://hidden-dusk-99442.herokuapp.com/tasksEdit/${taskID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                taskDes: taskDes
            })
        })
            .then(response => response.json())
            .then(data => {
                SetreLoad(!reload)
                console.log('Success:', data);
            })

        window.alert('Update Done')

    }



    return (
        <div className='flex justify-center items-center' >
            <div className=' p-4 rounded-lg  w-96 glass flex justify-center flex-col gap-1' >
                <h1>your tasks</h1>

                <div className='flex flex-col ' >
                    {
                        tasks.map(task => <Task key={task._id} task={task} SetreLoad={SetreLoad} reload={reload} handleUpdate={handleUpdate} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Tasks;
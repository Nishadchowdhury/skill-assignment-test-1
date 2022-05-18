import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Task from './Task';



const Home = () => {
    const [tasks, setTasks] = useState([])
    const [reload, SetreLoad] = useState(false)

    useEffect(() => {
        fetch('https://hidden-dusk-99442.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            })

    }, [reload])

    const handleSubmit = async e => {
        e.preventDefault()

        const taskName = e.target.name.value;
        const taskDes = e.target.des.value;

        const task = { taskName, taskDes }

        const data = await axios({
            method: 'post',
            url: 'https://hidden-dusk-99442.herokuapp.com/tasks',
            data: {
                taskName: taskName,
                taskDes: taskDes,
                isDone: false
            }
        });

        window.alert('ok done')

        console.log(data);
        SetreLoad(!reload)

        e.target.reset()

    }

    const handleDelete = async e => {
        console.log(e);

        fetch(`https://hidden-dusk-99442.herokuapp.com/tasks/${e}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                SetreLoad(!reload)
                console.log(data)
            })
    }

    const handleUpdate = async e => {
        console.log(e);

        const data = true;

        fetch(`https://hidden-dusk-99442.herokuapp.com/tasks/${e}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                SetreLoad(!reload)
                console.log('Success:', data);
            })
    }

    return (
        <div className='text-red-300 bg-gradient-to-t from-primary to-secondary  h-screen flex justify-center flex-col items-center ' >
            <div>
                <form onSubmit={handleSubmit} className="p-4 rounded-lg  w-96 glass flex justify-center  flex-col gap-1 ">

                    <input name='name' type="text" placeholder="Task Name" className="input input-bordered w-full  " />
                    <textarea name='des' type="text" placeholder="Task Description" className="input input-bordered w-full  " />
                    <input type="submit" value={'Add Task'} placeholder="Type here" className=" btn input input-bordered text-gray-500 bg-slate-200 w-full mt-4  " />
                </form>
                <div className=' p-4 rounded-lg  w-96 glass flex justify-center flex-col gap-1' >
                    <h1>your tasks</h1>

                    <div className='flex flex-col ' >
                        {
                            tasks.map(task => <Task key={task._id} task={task} handleDelete={handleDelete} handleUpdate={handleUpdate} />)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;

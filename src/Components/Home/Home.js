import axios from 'axios';
import React, { useEffect, useState } from 'react';



const Home = () => {


    const handleSubmit = async e => {
        e.preventDefault()

        const taskName = e.target.name.value;
        const taskDes = e.target.des.value;


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

        e.target.reset()


    }



    return (
        <>
            <div className='text-red-300 bg-gradient-to-t from-primary to-secondary  h-screen flex justify-center flex-col items-center ' >
                <div>
                    <form onSubmit={handleSubmit} className="p-4 rounded-lg  w-96 glass flex justify-center  flex-col gap-1 ">

                        <input name='name' type="text" placeholder="Task Name" className="input input-bordered w-full  " />
                        <textarea name='des' type="text" placeholder="Task Description" className="input input-bordered w-full  " />
                        <input type="submit" value={'Add Task'} placeholder="Type here" className=" btn input input-bordered text-gray-500 bg-slate-200 w-full mt-4  " />
                    </form>

                </div>

            </div>

            <footer class="footer flex justify-center p-4 bg-neutral text-neutral-content">
                <h1 className='text-center inline-block'>All rights reserved 2022</h1>
            </footer>
        </>
    );
};

export default Home;

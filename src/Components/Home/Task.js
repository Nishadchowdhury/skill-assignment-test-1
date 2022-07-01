import React, { useState } from 'react';

const Task = ({ task, handleDelete, handleUpdate, reload, SetreLoad }) => {
    const { taskName, taskDes, isDone, _id } = task;




    const [btnNone, SetbtnNone] = useState(true);

    const CngTask = e => {

        console.log(e);

        if (taskDes !== e) {
            SetbtnNone(false)

        } else {
            SetbtnNone(true)
        }

    }




    return (
        <div className='w-full'>
            <h1 className='text-sm bg-zinc-100 text-black text-center rounded-lg rounded-b-none'> {taskName} </h1>
            <div className='flex w-full gap-x-1 bg-black rounded-lg mb-4' >

                <form action="" onSubmit={handleUpdate} >
                    <textarea onChange={(e) => CngTask(e.target.value)} className='h-[90px] bg-gray-900 text-white rounded-lg  ' name="taskDetails" defaultValue={taskDes} id="" cols="30" rows="10"></textarea>

                    <input type="text" name='id' defaultValue={_id} className="hidden" />

                    <button disabled={btnNone} type='submit' className='btn px-2 mt-3 p-0 '>
                        {'Update Task'}
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Task; //
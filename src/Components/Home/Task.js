import React from 'react';

const Task = ({ task, handleDelete, handleUpdate }) => {
    const { taskName, taskDes, isDone, _id } = task;
    return (
        <div className='w-full'>
            <h1 className='text-sm bg-zinc-100 text-black text-center rounded-lg rounded-b-none'> {taskName} </h1>
            <div className='flex w-full gap-x-1 bg-black rounded-lg' >

                <p className=' bg-gray-800 p-3 rounded-lg input-bordered w-full max-h-full rounded-t-none  ' >  {taskDes} </p>
                {isDone ? <button className='btn w-11 rounded-t-none '>{'Done'}</button> :
                    <button className='btn w-11 rounded-t-none p-0 '><img src="/success.svg" className='w-full' alt=""
                        onClick={() => handleUpdate(_id)}
                    /></button>} <button
                        onClick={() => handleDelete(_id)}
                        className='btn w-11 rounded-t-none '>X</button>
            </div>
        </div>
    );
};

export default Task;
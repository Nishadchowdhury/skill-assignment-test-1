import React, { useState } from 'react';
import Calendar from 'react-calendar';


const Calander = () => {

    const [value, onChange] = useState(new Date());

    return (
        <div className='flex justify-center items-center' >
            <Calendar className='bg-white text-black py-2 px-4 rounded-2xl mt-10' onChange={onChange} value={value} />
        </div>
    );
};

export default Calander;

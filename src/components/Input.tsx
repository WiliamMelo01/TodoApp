import React, { useContext } from 'react';

import { CreateTaskInterface } from '../@types/@type.CreateTask';

import { ManageTask } from '../contexts/ManageTask';

export default function Input() {

    const { taskDescription, setTaskDescription } = useContext(ManageTask) as CreateTaskInterface;

    return (
        <input
            type="text"
            className="h-full w-4/6 lg:w-8/12 border border-[#BDBDBD] outline-none rounded-xl 
            pl-3 placeholder:font-montserrat placeholder:font-normal"
            placeholder='Add details'
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
        />
    )
}

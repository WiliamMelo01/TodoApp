import React, { useContext } from 'react';

import { ManageTask } from '../contexts/ManageTask';

import { CreateTaskInterface } from '../@types/@type.CreateTask';

type ProtTypes = {
    text: string
}

export default function Button({ text }: ProtTypes) {

    const { CreateTasks } = useContext(ManageTask) as CreateTaskInterface;

    return (
        <button className='h-full w-3/12 sm:w-1/4 bg-[#2F80ED] text-white font-montserrat font-semibold text-sm rounded-xl'
            onClick={() => CreateTasks()}
        >
            {text}
        </button>
    )
}

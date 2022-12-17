import React, { useState, useContext } from 'react';

import { CreateTaskInterface } from '../@types/@type.CreateTask';

type PropTypes = {
    taskDescription: string;
    actived?: boolean;
    itemKey: string;
    Completed?: boolean
}

import { ManageTask } from '../contexts/ManageTask';

import { BiTrashAlt } from 'react-icons/bi';

export default function TodoItem({ taskDescription, actived, itemKey, Completed }: PropTypes) {

    const { ChangeTaskStatus, DeleteTask } = useContext(ManageTask) as CreateTaskInterface;

    const [checked, setChecked] = useState(actived);

    const handleClick = () => {
        setChecked(!checked);
        ChangeTaskStatus(itemKey);
    };

    return (
        <div className="flex gap-2 mb-8 relative">
            <input
                type="checkbox"
                className='w-6 h-6 rounded-lg'
                checked={checked}
                onChange={handleClick}
            />
            <p className='font-montserrat font-medium text-lg'
                style={{
                    textDecoration: checked ? 'line-through' : 'none'
                }}
            >
                {taskDescription}
            </p>
            {
                Completed &&
                <BiTrashAlt size={22} className='absolute right-0 hover:cursor-pointer text-[#BDBDBD] active:text-[#807e7e]'
                    onClick={() => DeleteTask(itemKey)}
                />
            }
        </div>
    )
}

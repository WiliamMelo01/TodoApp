import React, { useContext } from 'react';

import { TaskContextInterface } from '../@types/@type.Task';
import { ActivedMenuInterface } from '../@types/@type.ActivedMenu';
import { CreateTaskInterface } from '../@types/@type.CreateTask';

import { Tasks } from '../contexts/Tasks';
import { ActivedMenu } from '../contexts/ActivedMenu';
import { ManageTask } from '../contexts/ManageTask';

import Button from '../components/Button';
import Input from '../components/Input';
import TabMenu from '../components/TabMenu';
import TodoItem from '../components/TodoItem';

import { BiTrashAlt } from 'react-icons/bi';

export default function Home() {

    const { currentTasks } = useContext(Tasks) as TaskContextInterface;
    const { activedMenuItem } = useContext(ActivedMenu) as ActivedMenuInterface;
    const { deleteAllTasks } = useContext(ManageTask) as CreateTaskInterface;

    const MyTasks = currentTasks;

    return (
        <div className="w-screen min-h-screen overflow-x-hidden bg-white">
            <h1 className='text-secondary-100 font-montserrat font-bold text-4xl mt-8 mb-14 w-full text-center'>
                #todo
            </h1>
            <div className="w-3/4 sm:w-1/2 lg:w-1/3 m-auto">
                <TabMenu menuList={['All', 'Active', 'Completed']} />
                {
                    activedMenuItem !== 'Completed' &&
                    <div className="w-full h-14 flex items-center justify-between">
                        <Input />
                        <Button text='Add' />
                    </div>
                }
                <div className="w-full mt-8">
                    {
                        MyTasks &&
                        activedMenuItem === "All" &&
                        MyTasks.map((item, index) => {
                            return <TodoItem
                                taskDescription={item.description}
                                key={index}
                                actived={!item.active}
                                itemKey={item.key}
                            />
                        })
                    }
                    {
                        MyTasks &&
                        activedMenuItem === "Active" &&
                        MyTasks.filter(item => item.active === true).map((item, index) => {
                            return <TodoItem
                                taskDescription={item.description}
                                key={index}
                                actived={!item.active}
                                itemKey={item.key}
                            />
                        })
                    }
                    {
                        MyTasks &&
                        activedMenuItem === "Completed" &&
                        MyTasks.filter(item => item.active === false).map((item) => {
                            return <TodoItem
                                taskDescription={item.description}
                                key={item.key}
                                actived={!item.active}
                                itemKey={item.key}
                                Completed
                            />
                        })
                    }
                    {
                        activedMenuItem === 'Completed' &&
                        <div className="flex h-10 items-center justify-end">
                            <button className="h-full w-32 bg-[#EB5757] flex items-center justify-center gap-2 rounded-md hover:cursor-pointer"
                                onClick={() => deleteAllTasks()}
                            >
                                <BiTrashAlt className='text-white' />
                                <div className="font-montserrat font-semibold text-white text-xs">
                                    delete all
                                </div>
                            </button>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

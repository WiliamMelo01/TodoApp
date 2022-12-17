import React, { createContext, useState, useEffect, useContext } from 'react';

import { Tasks } from './Tasks';

import { CreateTaskInterface } from '../@types/@type.CreateTask';
import { TaskInterface, TaskContextInterface } from '../@types/@type.Task';

import { v4 } from 'uuid';
import Swal from 'sweetalert2'

export const ManageTask = createContext<CreateTaskInterface | {}>({});

export default function CreateTaskProvider({ children }: { children: React.ReactNode }) {

    const [taskDescription, setTaskDescription] = useState('');

    const { setCurrentTasks } = useContext(Tasks) as TaskContextInterface;

    function CreateTasks() {

        if (taskDescription === '') {
            return;
        }

        setTaskDescription('');

        let ExistingTasks = localStorage.getItem('tasks');

        if (ExistingTasks === null) {
            const newTask: TaskInterface = {
                description: taskDescription,
                active: true,
                key: v4()
            };

            const myTasks: Array<TaskInterface> = [newTask];

            setCurrentTasks(myTasks);
            localStorage.setItem('tasks', JSON.stringify(myTasks));
            return;
        } else {
            const myTasks: Array<TaskInterface> = JSON.parse(ExistingTasks);

            const newTask: TaskInterface = {
                description: taskDescription,
                active: true,
                key: v4()
            };

            myTasks.push(newTask);

            setCurrentTasks(myTasks);
            localStorage.setItem('tasks', JSON.stringify(myTasks));

        }

    }

    function ChangeTaskStatus(itemKey: string) {

        const ExistingTasks = localStorage.getItem('tasks');

        if (ExistingTasks == null) {
            return;
        }

        const Tasks: Array<TaskInterface> = JSON.parse(ExistingTasks);

        const task = Tasks.filter(item => item.key === itemKey);

        task[0].active = !task[0].active;

        localStorage.setItem('tasks', JSON.stringify(Tasks));
        setCurrentTasks(Tasks);

    }

    function DeleteTask(itemKey: string) {
        const ExistingTasks = localStorage.getItem('tasks');

        if (ExistingTasks == null) {
            return;
        }

        const Tasks: Array<TaskInterface> = JSON.parse(ExistingTasks);

        for (var i = 0; i < Tasks.length; i++) {

            if (Tasks[i].key === itemKey) {
                Tasks.splice(i, 1);
            }

        }

        localStorage.setItem('tasks', JSON.stringify(Tasks));
        setCurrentTasks(Tasks);
        veririfyEmptyStorage();

    }

    function deleteAllTasks() {

        let ExistingTasks = localStorage.getItem('tasks');
        if (ExistingTasks === null) {
            return;
        }

        const Tasks: Array<TaskInterface> = JSON.parse(ExistingTasks);

        const FilteredTasks: Array<TaskInterface> = Tasks.filter(item => item.active === true);

        localStorage.setItem('tasks', JSON.stringify(FilteredTasks));
        setCurrentTasks(FilteredTasks);
        veririfyEmptyStorage();

        Swal.fire({
            icon: 'success',
            title: 'Deleted',
            text: 'All tasks were deleted',
        })
    }

    function veririfyEmptyStorage() {

        const ExistingTasks = localStorage.getItem('tasks');

        if (ExistingTasks === null) {
            console.log('null');

            return;
        }

        if (JSON.parse(ExistingTasks).length === 0) {
            localStorage.removeItem('tasks');
            return;
        }

        return;

    }

    return (
        <ManageTask.Provider value={{ taskDescription, setTaskDescription, CreateTasks, ChangeTaskStatus, DeleteTask, deleteAllTasks }}>
            {children}
        </ManageTask.Provider>
    )
}
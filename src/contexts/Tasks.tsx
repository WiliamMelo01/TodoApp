import React, { createContext, useEffect, useState } from 'react';

import { TaskInterface, TaskContextInterface } from '../@types/@type.Task';

export const Tasks = createContext<TaskContextInterface | null>(null);

export default function Task({ children }: { children: React.ReactNode }) {

    const [currentTasks, setCurrentTasks] = useState<Array<TaskInterface> | null>(null);

    useEffect(() => {
        const tasks = localStorage.getItem('tasks');

        if (tasks !== null) {
            setCurrentTasks(JSON.parse(tasks));
        }
    }, []);

    return (
        <Tasks.Provider value={{ currentTasks, setCurrentTasks }}>
            {children}
        </Tasks.Provider>
    )
}
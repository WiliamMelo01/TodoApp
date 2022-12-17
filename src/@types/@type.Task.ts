export interface TaskInterface {
    description: string;
    active: boolean;
    key: string
}

export interface TaskContextInterface {
    currentTasks: TaskInterface[] | null;
    setCurrentTasks: React.Dispatch<React.SetStateAction<TaskInterface[] | null>>;
}

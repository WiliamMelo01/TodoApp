export interface CreateTaskInterface {
    taskDescription: string;
    setTaskDescription: React.Dispatch<React.SetStateAction<string>>;
    CreateTasks: () => void;
    ChangeTaskStatus: (itemKey: string) => void;
    DeleteTask: (itemKey: string) => void;
    deleteAllTasks(): void;
}
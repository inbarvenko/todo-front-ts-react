export type TaskType = {
    id: number;
    todosid: number;
    title: string;
    active: boolean;
};

export type ToDoType = {
    id: number;
    title: string;
    tasks: TaskType[];
}

export type TodosResponse = {
    todos: ToDoType[];
}

export type TasksResponse = {
    todoTasks: TaskType[];
}
import { TaskType, TasksResponse } from "../types/todo.types";
import { axiosInstance } from "./axios";

export const getTodoTasks = async (id: number) => {
  const tasks = await axiosInstance
    .get<TasksResponse>(`/${id}`)
    .then((res) => res.data.todoTasks);

  return tasks;
};

export const createTask = async (id: number, title: string) => {
  const taskStatus = await axiosInstance
    .post<TaskType>(`/${id}`, null, {
      params: {
        title: title,
      },
    })
    .then((res) => res.data);

  return taskStatus;
};

export const removeTaskRequest = async (id: number) => {
  const taskStatus = await axiosInstance
    .delete(`/tasks/${id}`)
    .then((res) => res.data);

  return taskStatus;
};

export const toggleTaskRequest = async (status: boolean, id: number) => {
  const taskStatus = await axiosInstance
    .patch(`/tasks/${id}`, null, {
      params: {
        status: status,
      },
    })
    .then((res) => res.data);

  console.log(taskStatus);

  return taskStatus;
};

export const editTaskRequest = async (title: string, id: number) => {
  console.log(title, id);
  const newTask = await axiosInstance
    .patch(`/tasks/${id}`, null, {
      params: {
        title: title,
      },
    })
    .then((res) => res.data);

    console.log(newTask);

  return newTask;
};

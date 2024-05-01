import { ToDoType, TodosResponse } from "../types/todo.types";
import { axiosInstance } from "./axios";

export const getAllTodos = async () => {
  const todosData = await axiosInstance
    .get<TodosResponse>("/")
    .then((res) => res.data.todos);

  return todosData;
};

export const createTodoRequest = async (title: string) => {
  const newTodo = await axiosInstance
    .post<ToDoType>("/", null, {
      params: {
        title: title,
      },
    })
    .then((res) => res.data);

  return newTodo;
};

export const removeTodoRequest = async (id: number) => {
  const todoStatus = await axiosInstance
    .delete(`/${id}`)
    .then((res) => res.data);

  return todoStatus;
};

export const editTodoRequest = async (title: string, id: number) => {
  const newTask = await axiosInstance
    .patch(`/${id}`, null, {
      params: {
        title: title,
      }
    })
    .then((res) => res.data);

    return newTask;
};

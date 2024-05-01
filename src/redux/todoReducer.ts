import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskType, ToDoType } from "../types/todo.types";

type TaskByIdType = {
  id: number;
  tasks: TaskType[];
};

type AddNewTaskByIdType = {
  id: number;
  task: TaskType;
};

type ChangeByIdType = {
  id: number;
  title: string;
}

type ChangeTaskByIdType = {
  id: number;
  todosid: number;
  title: string;
}

type RemoveTaskType = {
  todoId: number;
  taskId: number;
}

type InitialState = {
  todos: ToDoType[];
};

const initialState: InitialState = {
  todos: [] as ToDoType[],
};

const todoReducer = createSlice({
  name: "ToDoList",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<ToDoType[]>) => {
      state.todos = action.payload;
    },
    setTasksById: (state, action: PayloadAction<TaskByIdType>) => {
      const id = action.payload.id;
      const todosArray = state.todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          tasks: action.payload.tasks,
        };
      });

      state.todos = todosArray;
    },
    addTodo: (state, action: PayloadAction<ToDoType>) => {
      state.todos.push(action.payload);
    },
    addNewTaskById: (state, action: PayloadAction<AddNewTaskByIdType>) => {
      const id = action.payload.id;
      const newTask = action.payload.task;
      const newTodoArray = state.todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          tasks: [...todo.tasks, newTask],
        };
      });

      state.todos = newTodoArray;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const filteredTodos = state.todos.filter((todo) => todo.id !== id);
      state.todos = filteredTodos;
    },
    removeTask: (state, action: PayloadAction<RemoveTaskType>) => {
      const todoId = action.payload.todoId;
      const taskId = action.payload.taskId;
      const filteredTodos = state.todos.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          tasks: todo.tasks.filter((task) => task.id !== taskId),
        }
      })

      state.todos = filteredTodos;
    },
    changeTodoById: (state, action: PayloadAction<ChangeByIdType>) => {
      const id = action.payload.id;
      const filteredTodos = state.todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          title: action.payload.title
        }
      });

      state.todos = filteredTodos;
    },
    changeTaskById: (state, action: PayloadAction<ChangeTaskByIdType>) => {
      const id = action.payload.id;
      const todosId = action.payload.todosid;
      console.log(action.payload.title);

      const filteredTodos = state.todos.map((todo) => {
        if (todo.id !== todosId) {
          return todo;
        }

        return {
          ...todo,
          tasks: todo.tasks.map((task) => {
            if (task.id !== id) {
              return task;
            }

            return {
              ...task,
              title: action.payload.title,
            };
          }),
        };
      });

      state.todos = filteredTodos;
    },
    changeStatusTask: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const filteredTodos = state.todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          tasks: todo.tasks.map((task) => {
            if (task.id !== id) {
              return task;
            }

            return {
              ...task,
              active: !task.active,
            };
          }),
        };
      });

      state.todos = filteredTodos;
    },
  },
});

export default todoReducer.reducer;
export const {
  setTodos,
  setTasksById,
  addTodo,
  addNewTaskById,
  removeTodo,
  removeTask,
  changeStatusTask,
  changeTaskById,
  changeTodoById,
} = todoReducer.actions;

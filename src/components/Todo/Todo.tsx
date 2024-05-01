import React, { useEffect } from "react";

import { ToDoType } from "../../types/todo.types";
import { createTask, getTodoTasks } from "../../api/task.api";
import { useAppDispatch } from "../../redux/hooks";
import {
  addNewTaskById,
  changeTaskById,
  changeTodoById,
  removeTodo,
  setTasksById,
} from "../../redux/todoReducer";
import { editTodoRequest, removeTodoRequest } from "../../api/todo.api";
import { TodoWrapper } from "./Todo.styles";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";
import TaskList from "../TaskList/TaskList";
import ModalInput from "../Modal/Modal";

type Props = {
  todo: ToDoType;
};

const Todo = ({ todo }: Props) => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  const handleGetTasks = async () => {
    const tasks = await getTodoTasks(todo.id);
    if (!tasks) return;

    dispatch(setTasksById({ id: todo.id, tasks: tasks }));
  };

  const handleAddTask = async (title: string) => {
    const newTask = await createTask(todo.id, title);
    if (!newTask) return;
    dispatch(addNewTaskById({ id: todo.id, task: newTask }));
  };

  const handleRemoveTodo = async () => {
    const removeStatus = await removeTodoRequest(todo.id);

    if (!removeStatus) return;
    dispatch(removeTodo(todo.id));
  };

  const handleEditTodo = async (title: string) => {
    const updatedTask = await editTodoRequest(title, todo.id);
    if (!updatedTask) return;

    dispatch(changeTodoById({ id: todo.id, title }));
  };

  const handleOpenModalEdit = () => {
    handleOpenModal();
    setEdit(true);
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    if (!edit) return;
    setEdit(false);
  };

  const options = [
    {title: "Создать новую задачу", onClick: handleOpenModal},
    {title: "Удалить заметку", onClick: handleRemoveTodo},
    {title: "Редактировать задачу", onClick: handleOpenModalEdit},
  ];

  useEffect(() => {
    try {
      handleGetTasks();
    } catch (error) {
      console.log(error);
    }
  }, [todo?.tasks]);

  return (
    <TodoWrapper>
      <div className="Header">
        <h2 className="Header-Title">{todo.title}</h2>
        <ButtonsGroup options={options} />
      </div>

      <ModalInput
        isEditable={edit}
        isModalOpen={isModalOpen}
        onCloseModal={handleCloseModal}
        onAddTask={handleAddTask}
        onEditTodo={handleEditTodo}
      />

      <TaskList tasks={todo.tasks} />
    </TodoWrapper>
  );
};

export default Todo;

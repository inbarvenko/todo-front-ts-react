import { TaskType } from "../../types/todo.types";
import { Checkbox, IconButton } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import {
  changeStatusTask,
  changeTaskById,
  removeTask,
} from "../../redux/todoReducer";
import { TaskWrapper } from "./Task.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import {
  editTaskRequest,
  removeTaskRequest,
  toggleTaskRequest,
} from "../../api/task.api";
import ModalInput from "../Modal/Modal";
import React from "react";

type Props = {
  task: TaskType;
};

const Task = ({ task }: Props) => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  const toggleState = async () => {
    const newStatus = await toggleTaskRequest(!task.active, task.id);
    if (!newStatus) return;

    dispatch(changeStatusTask(task.id));
  };

  const handleRemoveTask = async () => {
    const removeStatus = await removeTaskRequest(task.id);
    if (!removeStatus) return;

    dispatch(removeTask({ todoId: task.todosid, taskId: task.id }));
  };

  const handleEditTask = async (title: string) => {
    const editTask = await editTaskRequest(title, task.id);
    if (!editTask) return;

    dispatch(changeTaskById({ id: task.id, todosid: task.todosid, title: title }));
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setEdit(true);
  }

  const handleCloseModal = () => {
    setEdit(false);
    setIsModalOpen(false);
  }

  return (
    <TaskWrapper completed={!task.active}>
      <ModalInput
        isModalOpen={isModalOpen}
        isEditable={edit}
        onEditTodo={handleEditTask}
        onCloseModal={handleCloseModal}
        />
      <Checkbox onChange={toggleState} checked={!task.active} />
      <p className="Text">{task.title}</p>
      <IconButton
        aria-label="delete"
        color="primary"
        onClick={handleRemoveTask}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit" color="primary" onClick={handleModalOpen}>
        <EditIcon />
      </IconButton>
    </TaskWrapper>
  );
};

export default Task;

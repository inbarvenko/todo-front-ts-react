import React from "react";
import { TaskType } from "../../types/todo.types";
import { TaskListWrapper } from "./TaskList.styles";
import Task from "../Task/Task";

type Props = {
  tasks: TaskType[];
};

const TaskList = ({ tasks }: Props) => {
  return (
    <TaskListWrapper>
      <div>
        {tasks && tasks.length ? (
          tasks.map((task) => <Task task={task} key={task.id} />)
        ) : (
          <div className="Empty">Задач пока нет</div>
        )}
      </div>
    </TaskListWrapper>
  );
};

export default TaskList;

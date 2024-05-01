import React, { useEffect } from "react";
import { TodoListWrapper } from "./TodoList.styles";
import { ToDoType } from "../../types/todo.types";
import { createTodoRequest, getAllTodos } from "../../api/todo.api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTodo, setTodos } from "../../redux/todoReducer";
import Todo from "../Todo/Todo";
import InputForm from "../InputForm/InputForm";

type Props = {};

const TodoList: React.FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todoData.todos);

  const handleGetTodos = async () => {
    const todos: ToDoType[] = await getAllTodos();
    dispatch(setTodos(todos));
  };

  const handleAddTodo = async (title: string) => {
    const titleTrim = title.trim();

    const newTodo = await createTodoRequest(titleTrim);
    if (!newTodo) return;

    dispatch(addTodo(newTodo));
  };

  useEffect(() => {
    try {
      handleGetTodos();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <TodoListWrapper>
      <h1 className="Title">Мои заметки</h1>
      <InputForm buttonTitle="Добавить новую заметку" onClickSave={handleAddTodo} />
      <div className="TodoList">
        {todos.length ?
          todos.map((todo) => <Todo todo={todo} key={todo.id} />)
        : <div className="Empty">Заметок пока нет</div>}
      </div>
    </TodoListWrapper>
  );
};

export default TodoList;

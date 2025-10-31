import { useState } from "react";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";

const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    // a new updated list of todos..
    const updatedTodos = todos.map(function (todo, index, todos) {
      return { ...todo };
    });

    // new todo..
    const newTodo = {
      id: updatedTodos.length + 1,
      title: title,
      done: false,
    };

    // update the state with new todo..
    setTodos([
      newTodo,
      ...updatedTodos, // append existing below the new ones..
    ]);
  }

  function handleChangeTodo(nextTodo) {
    console.log(nextTodo);

    // get the updated todos..
    const updatedTodos = todos.map(function (todo, index, todos) {
      // check for matching todo..
      if (todo.id == nextTodo.id) {
        // get the new update current todo..
        return {
          ...todo,
          title: nextTodo.title,
          done: nextTodo.done,
        };
      }

      // otherwise, return other todo as it is..
      return todo;
    });

    // update the state at the end..
    setTodos(updatedTodos);
  }

  function handleDeleteTodo(todoId) {
    // get the filtered todos..
    const filteredTodos = todos.filter((todo) => todo.id != todoId);

    // update the state in end..
    setTodos(filteredTodos);
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

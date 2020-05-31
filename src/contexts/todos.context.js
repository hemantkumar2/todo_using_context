import React, { createContext } from "react";
import useTodoState from "../Hooks/useTodoState";

const defaultTodos = [
  { id: "1", task: "Do exercise", complete: false },
  { id: "1", task: "Buy eggs", complete: true },
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
